import { BlogPostTag, Category, Comment, Project, ProjectImage, ProjectLink, ProjectTechnology, Tag, Technology , BlogPost} from "@prisma/client"
import { User } from "better-auth"

// CATEGORY
type CategoryExt = Category & {

    blogPosts: BlogPost[]
}

// BLOG POST
type BlogPostExt = BlogPost & {

    comments: Comment[]
    blogPostTags: BlogPostTagExt[]
}

// PROJECT
type ProjectExt = Project & {

    ProjectImages: ProjectImage[]
    ProjectLinks: ProjectLink[]
    ProjectTechnologies: ProjectTechnologyExt[]
}

// TECHNOLOGY
type TechnologyExt = Technology & {
    ProjectTechnologies: ProjectTechnology[]
}

// TAG
type TagExt = Tag & {

    blogPostTags: BlogPostTag[]
}

// COMMENT
type CommentExt = Comment & {

    user: User
    blogPost: BlogPost
    parent?: CommentExt | null
    replies: CommentExt[]

}




// BRIDGE RELATIONS

type ProjectTechnologyExt = ProjectTechnology & {

    technology: Technology
}

type BlogPostTagExt = BlogPostTag & {

    tag: Tag
}