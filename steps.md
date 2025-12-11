// USE EFFECT VE HANDLER İÇERİSİNDE KESE KONTROLÜ YAPMALISIN.
// FONKSİYONLAR İÇİN KESE KONTROLÜ YAPMAYA GEREK YOK.

// ALERT GÖSTERMEYE GEREK YOK
console.log(`UNEXPECTED ERROR DURING FETCH BIO TEXT: ${error}`)


# PAGES


*** LAYOUT ***

* COMMENT COMPONENT YAPILIRKEN GOOGLE ILE GIRIŞ YAP ÖZELLİĞİ EKLENECEK. BU SIRADA LAYOUT İÇERİSİNE "SESSION PROVIDER" SARMACI EKLENİR.
	- BetterAuth sisteminde buna gerek yok.



*** (/) HOME PAGE ***

* USE EFFECT YOK
* PROP.D.TS YOK
* REDUCER YOK
* HANDLERS YOK


*** (/caps) CAPS PAGE ***

* USE EFFECT VAR, İŞLEM LOADING GEREKTİRİYOR.
	- Parametreler (+)
        - Kese kontrolü ( - , ihtiyaç yok)
 	- Try - Catch (+)
 	- Loading (+)
 	- Bağımlılıklar (+)
* PROP.D.TS Updated
* REDUCER Updated
* HANDLERS YOK


*** (/portfolio) PORTFOLIO PAGE ***

* USE EFFECT VAR, İŞLEM LOADING GEREKTİRİYOR.
	- Parametreler (+)
        - Kese kontrolü ( - , ihtiyaç yok)
 	- Try - Catch (+)
 	- Loading (+)
 	- Bağımlılıklar (+)
* PROP.D.TS Updated
* REDUCER Updated
* HANDLERS YOK


*** (/category) CATEGORY PAGE ***

* USE EFFECT VAR, İŞLEM LOADING GEREKTİRİYOR.
    - Parametreler (+)
        - Kese kontrolü (+)
 	- Try - Catch ( + )
 	- Loading (+)
 	- Bağmlılıklar (+)
* PROP.D.TS Updated
* REDUCER Updated
* HANDLERS YOK


*** (/[..category]/[..id]) POST PAGE ***

* USE EFFECT VAR, İŞLEM LOADING GEREKTİRİYOR.
    - Parametreler (+)
        - Kese kontrolü (+)
 	- Try - Catch ( + )
 	- Loading (+)
 	- Bağmlılıklar (+)
* PROP.D.TS Updated
* REDUCER Updated
* HANDLERS YOK



# COMPONENTS


*** BIO COMPONENT ***

* USE EFFECT VAR, İŞLEM LOADING GEREKTİRİYOR.
	- Parametreler (+)
		- Kese kontrolü ( - , ihtiyaç yok)
	- Try - Catch (+)
	- Loading (+)
	- Bağımlılıklar (+)
* PROP.D.TS Updated
* REDUCER Updated
* HANDLERS YOK
* Component userId KULLANMIYOR.


*** LINK COMPONENT ***

* USE EFFECT YOK
* PROP.D.TS YOK
* REDUCER YOK
* HANDLERS YOK
* Component userId KULLANMIYOR.


*** SUBSCRIBER COMPONENT ***

* USE EFFECT VAR, İŞLEM LOADING GEREKTİRMİYOR.
	- Parametreler (+)
		- Kese kontrolü ( - , ihtiyaç yok)
	- Try - Catch ( - , ihtiyaç yok)
	- Loading ( - , ihtiyaç yok)
	- Bağmlılıklar (+)

* USE EFFECT VAR, İŞLEM LOADING GEREKTİRMİYOR.
    - Parametreler (+)
        - Kese kontrolü (+)
 	- Try - Catch ( - , ihtiyaç yok)
 	- Loading ( - , ihtiyaç yok)
 	- Bağmlılıklar (+)

* PROP.D.TS Updated
* REDUCER Updated
* HANDLERS VAR:
	- handleInputOnChange
		- Parametreler (+)
			- Kese kontrolü (+)
		- Try - Catch ( - , ihtiyaç yok)
       	- Loading ( - , ihtiyaç yok)
* Component userId KULLANMIYOR.


*** INTRO COMPONENT ***

* USE EFFECT VAR, İŞLEM LOADING GEREKTİRİYOR.
	- Parametreler (+)
		- Kese kontrolü ( - , ihtiyaç yok)
	- Try - Catch (+)
	- Loading (+)
	- Bağımlılıklar (+)
* PROP.D.TS Updated
* REDUCER Updated
* HANDLERS YOK
* Component userId KULLANMIYOR.


*** PROJECTS COMPONENT ***

* USE EFFECT YOK
* PROP.D.TS Updated
* REDUCER YOK
* HANDLERS YOK
* Component userId KULLANMIYOR.


*** PROJECT CARD COMPONENT ***

* USE EFFECT VAR, İŞLEM LOADING GEREKTİRİYOR.
	- Parametreler (+)
		- Kese kontrolü (+)
	- Try - Catch (+)
	- Loading (+)
	- Bağımlılıklar (+)
* PROP.D.TS Updated
* REDUCER Updated
* HANDLERS VAR:
	- HandleShowClick
		- Parametreler (+)
			- Kese kontrolü (+)
		- Try - Catch ( - , ihtiyaç yok)
       	- Loading ( - , ihtiyaç yok)
* Component userId KULLANMIYOR.


*** CAPS COMPONENT ***
- USE EFFECT YOK.
- PROP.D.TS Updated
- REDUCER Updated
- HANDLERS VAR:
	- handleImageClick
			- Parametreler (+)
				- Kese kontrolü (+)
			- Try - Catch ( - , ihtiyaç yok)
			- Loading ( - , ihtiyaç yok)
	- CloseModal
			- Parametreler (+)
				- Kese kontrolü ( - , ihtiyaç yok)
			- Try - Catch ( - , ihtiyaç yok)
			- Loading ( - , ihtiyaç yok)
* Component userId KULLANMIYOR.


*** BLOG COMPONENT ***
* USE EFFECT VAR, İŞLEM LOADING GEREKTİRİYOR.
	- Parametreler (+)
		- Kese kontrolü (+)
	- Try - Catch (+)
	- Loading (+)
	- Bağımlılıklar (+)
- PROP.D.TS Updated
- REDUCER Updated
- HANDLERS VAR:
	- handlePageChange
			- Parametreler (+)
				- Kese kontrolü (+)
			- Try - Catch ( - , ihtiyaç yok)
			- Loading ( - , ihtiyaç yok)
* Component userId KULLANMIYOR.


*** CONTAINER COMPONENT ***

- USE EFFECT YOK
- PROP.D.TS Updated
- REDUCER YOK
- HANDLERS YOK
* Component userId KULLANMIYOR.

*** ARTICLE COMPONENT ***

* USE EFFECT VAR, İŞLEM LOADING GEREKTİRİYOR.
	- Parametreler (+)
		- Kese kontrolü (+)
	- Try - Catch (+)
	- Loading (+)
	- Bağımlılıklar (+)
- PROP.D.TS Updated
- REDUCER YOK
- HANDLERS YOK

*** RANDOM BLOG COMPONENT ***

* USE EFFECT VAR, İŞLEM LOADING GEREKTİRMİYOR.
	- Parametreler (+)
		- Kese kontrolü (+)
	- Try - Catch ( - , ihtiyaç yok)
	- Loading ( - , ihtiyaç yok)
	- Bağmlılıklar (+)

* USE EFFECT VAR, İŞLEM LOADING GEREKTİRİYOR.
	- Parametreler (+)
		- Kese kontrolü (+)
	- Try - Catch (+)
	- Loading (+)
	- Bağmlılıklar (+)
- PROP.D.TS Updated
- REDUCER Updated
- HANDLERS YOK

*** MENU COMPONENT ***
- USE EFFECT YOK.
- PROP.D.TS Updated
- REDUCER Updated
- HANDLERS VAR:
	- handleIconClick
		 Parametreler (+)
			- Kese kontrolü ( - , ihtiyaç yok)
		- Try - Catch ( - , ihtiyaç yok)
		- Loading ( - , ihtiyaç yok)


*** COMMENT COMPONENT ***
* USE EFFECT VAR, İŞLEM LOADING GEREKTİRİYOR.
	- Parametreler (+)
		- Kese kontrolü (+)
	- Try - Catch (+)
	- Loading (+)
	- Bağmlılıklar (+)
* PROP.D.TS Updated
* REDUCER Updated
* HANDLERS VAR:
	- handleReplyClick
		 Parametreler (+)
			- Kese kontrolü (+)
		- Try - Catch ( - , ihtiyaç yok)
		- Loading ( - , ihtiyaç yok)


*** COMMENT FORM COMPONENT ***
- USE EFFECT VAR, İŞLEM LOADING GEREKTİRMİYOR.
	- Parametreler (+)
		- Kese kontrolü (+)
	- Try - Catch ( - , ihtiyaç yok)
	- Loading ( - , ihtiyaç yok)
	- Bağmlılıklar (+)
- PROP.D.TS Updated
- REDUCER Updated
- HANDLERS VAR:
	- handleOnChangeClick
		 Parametreler (+)
			- Kese kontrolü (+)
		- Try - Catch ( - , ihtiyaç yok)
		- Loading ( - , ihtiyaç yok)



*** SHARE COMPONENT ***

- USE EFFECT YOK
- PROP.D.TS YOK
- REDUCER YOK
- HANDLERS YOK


# ACTIONS

*** GET ALL BLOG POSTS ***

* Tek Tip Response Check	(+)
* Tek Tip Props Check		(-, prop almıyor)
* Parametre Check With Zod	(-, prop almıyor)
* Status Code Check			(+)
* TRY-CATCH Check			(+)
* Performanslı Query		(+)
* Olasılıklar
    - Blog Posts length 0 olabilir	(+)
* Open Telemetry Log		(+)
* Redis Cache				(-, daha sonra)


*** GET CAPS ALL ***

* Tek Tip Response Check	(+)
* Tek Tip Props Check		(-, prop almıyor)
* Parametre Check With Zod	(-, prop almıyor)
* Status Code Check			(+)
* TRY-CATCH Check			(+)
* Performanslı Query		(+)
* Olasılıklar
    - Caps length 0 olabilir	(+)
* Open Telemetry Log		(+)
* Redis Cache				(-, daha sonra)


*** GET UNIQUE CATEGORY ***

* Tek Tip Response Check	(+)
* Tek Tip Props Check		(+)
* Parametre Check With Zod	(+)
* Status Code Check			(+)
* TRY-CATCH Check			(+)
* Performanslı Query		(+)
* Olasılıklar
    - Unique category null olabilir	(+)
* Open Telemetry Log		(+)
* Redis Cache				(-, daha sonra)


*** GET COMMENTS BY ID *** (???)

* Tek Tip Response Check	(+)
* Tek Tip Props Check		(+)
* Parametre Check With Zod	(+)
* Status Code Check			(+)
* TRY-CATCH Check			(+)
* Performanslı Query		(+)
* Olasılıklar
    - BlogId'e sahip blog olmayabilir	(+)
* Open Telemetry Log		(+)
* Redis Cache				(-, daha sonra)


*** MAKE COMMENT ***

* Tek Tip Response Check	(+)
* Tek Tip Props Check		(+)
* Parametre Check With Zod	(+)
* Status Code Check			(+)
* TRY-CATCH Check			(+)
* Performanslı Query		(+)
* Open Telemetry Log		(+)
* Redis Cache				(-, daha sonra)


*** GET PROJECTS ALL ***

* Tek Tip Response Check	(+)
* Tek Tip Props Check		(-, prop almıyor)
* Parametre Check With Zod	(-, prop almıyor)
* Status Code Check			(+)
* TRY-CATCH Check			(+)
* Performanslı Query		(+)
* Olasılıklar
    - Project length 0 olabilir	(+)
* Open Telemetry Log		(+)
* Redis Cache				(-, daha sonra)


*** CREATE SUBSCRIBER ***

* Tek Tip Response Check	(+)
* Tek Tip Props Check		(-, böyle daha iyi)
* Parametre Check With Zod	(+)
* Status Code Check			(+)
* TRY-CATCH Check			(+)
* Performanslı Query		(+)
* Olasılıklar
   - Subscriber mevcut olabilir	(+)
* Open Telemetry Log		(+)
* Redis Cache				(-, daha sonra)













# ZUSTAND STORE
Zustand store içerisinde sadece category bilgisi tutulacak.