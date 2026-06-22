---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Validation Rules"
domain: "Modules"
element_id: 1877269
diagrams: 3
connections: 14
tags:
  - requirement
  - modules
---

# 📋 Service - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Validation Rules

## 📝 Notes

- codeVersionNumber
must exists in Service where Service.Code = code and Service.VersionNumber = versionNumber


ServiceInputDto 

	
- code - for creating new service
must be unique in Service
must fulfill Product catalog enitity code
	
- name
must fulfill Service name
	
- validFrom
must fulfill ValidFrom-ValidTo of Service
	
- validTo
mustfulfill ValidFrom-ValidTo of Service
	
- plannedActivationDate
mandatory when versionStatus = FOR_ACTIVATION, otherwise ignored


	
- approvalDocument
mandatory
max length 60
	
- currency
must exists in Currency
	
- description
max length 255


	
- tariffCode
must exists in Tariff where tariff.currency = currency and Tariff.VersionStatus = Active. Must fulfill Service and Tariff cross validation
If Tariff.ServiceRestriction is filled then Service.ServiceType.Code must be equal to Tariff.ServiceRestriction
mandatory when Service.ServiceType = MTCACC and Service.MandatoryOnContract = false
disabled when Service.MandatoryOnContract = true


	
- termsAndConditions
must exists in Terms And Conditions where TermsAndConditions.Active = true.
	
- documentPrintouts
must fulfill ServiceDocumentPrintoutDto - validation
	
- qualificationCriteria

       must fulfill {ADD}Service qualification criteria check  

	
- subventions
must fulfill ServiceSubventionInputDto - validation 
must exist subvention [SUBVENTION_NOT_FOUND]
	
- eligibilityContainers
must exist active containers [ELIGIBILITY_CONTAINERS_NOT_FOUND]
service type must have flag ELIGIBILITY_CONTAINERS_ALLOWED[ELIGIBILITY_CONTAINER_NOT_ALLOWED]
	
- parameters
parameters specific to particular service type. Must fulfill ServiceParametersDto - validation
	
- limitMinInstallments
must be in interval 0-72 [INVALID_NUMBER]
equal or lower than limitMaxInstallments [INVALID_LIMIT]
	
- limitMaxInstallments
must be in interval 0-72 [INVALID_NUMBER]
equal or higher than limitMinInstallments [INVALID_LIMIT]
	
- limitMinCreditAmount
must be equal or higher than 0 [INVALID_NUMBER]
equal or lower than limitMaxCreditAmount [INVALID_LIMIT]
	
- limitMaxCreditAmount
must be equal or higher than 0 [INVALID_NUMBER]
equal or higher than limitMinCreditAmount [INVALID_LIMIT]
	
- additionalOfferExpiration
available values 1-99
mandatory when Service.ForAdditionalOffer = true


PUT ActivationInputDto 

	
- must fulfill rule Product catalog entity activation

## 🔗 Connections (14)

- ← Dependency: [[{MOD}PUT services]]
- ← Dependency: [[{MOD}POST services]]
- ← Dependency: [[{MOD}PUT service activations]]
- ← Dependency: [[{ADD}02.160 Import product catalog setting UI]]
- → Dependency: [[Product catalog enitity code]]
- → Dependency: [[Service qualification criteria check]]
- → Dependency: [[Service name (Requirement 1855357)]]
- → Dependency: [[Product catalog entity activation]]
- → Dependency: [[ValidFrom-ValidTo of Service]]
- → Dependency: [[{MOD}Service and Tariff cross validation]]
- → Dependency: [[{MOD}ServiceParametersDto - validation]]
- → Dependency: [[Only one version is active for a service code]]
- → Dependency: [[ServiceSubventionInputDto - validation]]
- → Dependency: [[ServiceDocumentPrintoutDto - validation]]

## 📊 Appears In (3 diagrams)

- Custom: Validation Rules
- Use Case: Export/Import product setting
- Use Case: Use Case
