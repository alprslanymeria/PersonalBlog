# Clean Architecture Implementation

Bu proje Clean Architecture prensiplerine ve SOLID prensiplerine uygun şekilde yeniden yapılandırılmıştır.

## Mimari Katmanlar

### 1. Domain Layer (İş Mantığı Katmanı)
**Konum:** `src/domain/`

En içteki katman, iş mantığını ve kurallarını içerir. Dış katmanlara bağımlılığı yoktur.

- **Entities** (`src/domain/entities/`): Veri modellerini temsil eden arayüzler
  - `BlogPost.ts`
  - `Category.ts`
  - `Comment.ts`
  - `Project.ts`
  - `Subscriber.ts`
  - `CapsImage.ts`

- **Repository Interfaces** (`src/domain/repositories/`): Veri erişim sözleşmeleri (Dependency Inversion Principle)
  - `IBlogPostRepository.ts`
  - `ICategoryRepository.ts`
  - `ICommentRepository.ts`
  - `IProjectRepository.ts`
  - `ISubscriberRepository.ts`
  - `ICapsImageRepository.ts`

### 2. Application Layer (Uygulama Katmanı)
**Konum:** `src/application/`

İş senaryolarını (use cases) içerir. Her use case tek bir sorumluluğa sahiptir (Single Responsibility Principle).

- **Use Cases** (`src/application/use-cases/`):
  - **Blog**: `GetAllBlogPostsUseCase`, `GetBlogByIdUseCase`, `GetRandomBlogPostsUseCase`
  - **Category**: `GetUniqueCategoryUseCase`
  - **Comment**: `GetCommentsByBlogIdUseCase`, `CreateCommentUseCase`
  - **Project**: `GetAllProjectsUseCase`
  - **Subscriber**: `CreateSubscriberUseCase`
  - **Caps**: `GetAllCapsImagesUseCase`

### 3. Infrastructure Layer (Altyapı Katmanı)
**Konum:** `src/infrastructure/`

Dış sistemlerle entegrasyonu sağlar (veritabanı, logger, vb.).

- **Repository Implementations** (`src/infrastructure/repositories/`): Repository arayüzlerinin Prisma ile implementasyonu
  - `PrismaBlogPostRepository.ts`
  - `PrismaCategoryRepository.ts`
  - `PrismaCommentRepository.ts`
  - `PrismaProjectRepository.ts`
  - `PrismaSubscriberRepository.ts`
  - `PrismaCapsImageRepository.ts`

- **Dependency Injection Container** (`src/infrastructure/di/container.ts`): Bağımlılık yönetimi

### 4. Presentation Layer (Sunum Katmanı)
**Konum:** `src/actions/`, `src/components/`, `src/app/`

Kullanıcı arayüzü ve API endpoint'leri.

- **Actions** (`src/actions/`): Next.js Server Actions - Use case'leri çağırır
  - `Blog.ts`
  - `Category.ts`
  - `Comment.ts`
  - `Project.ts`
  - `Subscriber.ts`
  - `Caps.ts`

## SOLID Prensipleri

### 1. Single Responsibility Principle (SRP)
Her sınıf ve fonksiyon tek bir sorumluluğa sahiptir:
- Her use case tek bir iş senaryosunu yönetir
- Her repository sadece bir entity için veri erişimi sağlar
- Action'lar sadece HTTP isteklerini yönetir ve use case'leri çağırır

### 2. Open/Closed Principle (OCP)
Sistem genişlemeye açık, değişikliğe kapalıdır:
- Interface'ler kullanılarak yeni implementasyonlar eklenebilir
- Use case'ler değiştirilmeden yeni özellikler eklenebilir

### 3. Liskov Substitution Principle (LSP)
Alt sınıflar üst sınıfların yerine kullanılabilir:
- Repository implementasyonları interface'lerini tam olarak uygular
- Tüm implementasyonlar birbirinin yerine kullanılabilir

### 4. Interface Segregation Principle (ISP)
Her interface sadece ihtiyaç duyulan metodları içerir:
- Repository interface'leri sadece gerekli CRUD operasyonlarını tanımlar
- Kullanılmayan metodlar yoktur

### 5. Dependency Inversion Principle (DIP)
Yüksek seviye modüller düşük seviye modüllere bağımlı değildir:
- Use case'ler repository interface'lerine bağımlıdır, implementasyonlara değil
- Dependency Injection Container ile bağımlılıklar yönetilir
- Action'lar use case'lere bağımlıdır, doğrudan veritabanına değil

## Bağımlılık Yönü

```
Presentation Layer (Actions)
        ↓
Application Layer (Use Cases)
        ↓
Domain Layer (Entities & Interfaces)
        ↑
Infrastructure Layer (Implementations)
```

## Kullanım Örneği

```typescript
// Action Layer - Blog.ts
export async function GetAllBlogPosts() {
    const useCase = container.getAllBlogPostsUseCase()
    const blogPosts = await useCase.execute()
    return createResponse(true, 200, {data: blogPosts}, "SUCCESS")
}

// Use Case - GetAllBlogPostsUseCase.ts
export class GetAllBlogPostsUseCase {
  constructor(private blogPostRepository: IBlogPostRepository) {}
  
  async execute(): Promise<BlogPostWithRelations[]> {
    return await this.blogPostRepository.findAll()
  }
}

// Repository Implementation - PrismaBlogPostRepository.ts
export class PrismaBlogPostRepository implements IBlogPostRepository {
  constructor(private prisma: PrismaClient) {}
  
  async findAll(): Promise<BlogPostWithRelations[]> {
    return await this.prisma.blogPost.findMany({...})
  }
}
```

## Avantajlar

1. **Test Edilebilirlik**: Her katman bağımsız olarak test edilebilir
2. **Bakım Kolaylığı**: Değişiklikler izole katmanlarda yapılabilir
3. **Esneklik**: Veritabanı değişikliği yapılabilir (Prisma → başka ORM)
4. **Bağımlılık Yönetimi**: DI Container ile merkezi bağımlılık yönetimi
5. **İş Mantığı İzolasyonu**: Core business logic altyapıdan bağımsız
6. **SOLID İlkelerine Uygunluk**: Kod kalitesi ve sürdürülebilirlik arttı
