---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/TODO - Suggestion to system improvement/Product Catalogue"
domain: "Requirements Model"
element_id: 1243036
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 {ES-11/2016}Service parameters from BSL to AM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/TODO - Suggestion to system improvement/Product Catalogue

## 📝 Notes

Momentálně máme dva kanály, kterými se z BSL do AM předávají parametry služeb z Product Catalogue:


	
- AccountManagementWS.CreateAccount
Součástí requestu jsou struktury ServiceParametersDto a její specializace GracePeriodServiceParametersDto, ZeroPromoServiceParametersDto, SMSNotificationServiceParametersDto (tak to mám aspoň v modelu).
Metoda předává parametry zvolených služeb platné v okamžiku uzavření smlouvy.
	
- ProvideServiceDataWS.GetServiceData (po notifikaci o vytvoření nebo změně služby)
Metoda předává parametry konkrétní služby/verze služby


Jakmile to bude možné (a začne fungovat nějaký interní vývoj), chtěl bych provést následující:

	
- AccountManagementWS.CreateAccount – v ServiceParametersDto bude předáván kód služby a její verze v okamžiku podpisu smlouvy
	
- AM si bude následně všechny parametry služeb stahovat přes ProvideServiceDataWS.GetServiceData

## 📊 Appears In (1 diagrams)

- Custom: Product Management
