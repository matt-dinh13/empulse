---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case"
domain: "Analysis Model"
element_id: 1825185
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}RecalculateCustomerOfferRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case

## 📝 Notes

// Validation of request for product offer recalculation
// returned resultCode and description is in bracket

Due to optimization reasons some validations below are executed later during offer recalculation at the moment when all necessary data are calculated. 

RecalculateCustomerOfferRequest

	
- offerCode
Mandatory
OrigResponse = {DEL PCG-1895}Product Offer Response(OriginalOffer){/DEL} {ADD PCG-1895}Offer Financial Parameter {/ADD} where OriginalOffer.OFP.Code = offerCode
Exists  OrigResponse
[INVALID_OFFERCODE]
OrigResponse.Offer Financial Parameter is not archived
[ARCHIVED_OFFER]


	
- offerRELIPCode
Optional; mandatory is an OfferService of type RELIP is assigned to OrigResponse and RELIPOffer was generated
[MISSING_OFFERRELIPCODE]
Exists OrigResponse.OFP.OfferRELIPService.OfferRELIPServiceVariant where OfferRELIPServiceVariant.OfferRELIPCode = offerRELIPCode
[INVALID_OFFERRELIPCODE]


	
- serviceChoice
Mandatory
[MISSING_SERVCHOICE]
	
- preferredDueDay
Optional
Entered value is in interval 1-28.
[INVALID_PREFDD]


	
- installmentScheduleMethod
Optional
Can be changed according to rule Allow change of installment schedule method [INST_SCHED_METHOD_CHANGE_NOT_ALLOWED]
Only installment schedule methods defined on Product Profile from OrigResponse are allowed [INVALID_INST_SCHED_METHOD]
If OfferService of type DEFP is assigned to OrigResponse then only installment schedule methods in (IS_ALG_EQ_PRINC, IS_ALG_AN_PRINC) are allowed [INVALID_INST_SCHED_METHOD]


RecalculateCustomerOfferRequest.ServiceChoice

	
- service
Service =  Service where Service.Code = ServiceChoice.service
Exists Service where current date is in Service.<ValidFrom, ValidTo>  
[INVALID_SERVICE, ServiceChoice.service]
Service.ServiceType.SerficeTypeToFlagType = RECALCULATION_ALLOWED
[NOT_SERVICE_FOR_RECALCULATION, ServiceChoice.Service]
	
- choice
Product = OrigResponse.Offer Financial Parameter.ProductVariant.Product
If ServiceChoice.choice = False then: 
- removed service was selected in OrigResponse, i.e. exists OrigResponse.Offer Financial Parameter.Offer Service where Service.Code = ServiceChoice.service
[NOTASSIGNED_SERVICE, ServiceChoice.service]
- if type of removed Service is Mandatory (i.e. Product.ProductToServiceType.AdjustmentRule = MANDATORY where ProductToServiceType.ServiceType = Service.ServiceType) then must exist another Service of the same type in (ServiceChoice where ServiceChoice.choice = True or in OrigResponse).
[MANDATORY_SERVICE, ServiceChoice.service.code]
If ServiceChoice.choice = True then: 
- added Service is assigned to Product, i.e. exists Product.ProductToService.Service where ProductToService.Service = Service 
[NOT_PRODUCTSERVICE, ServiceChoice.service.code]
- added Service is not exclusive with another service in ServiceSet according to rule Service Exclusivity Check, where ServiceSet is defined as:
a) add services already assigned to original offer, i.e. OrigResponse.Offer Financial Parameter.Offer Service.Service
b) add required services defined by RecalculateCustomerOfferRequest.ServiceChoice where ServiceChoice.choice = True
c) remove refused services defined by RecalculateCustomerOfferRequest.ServiceChoice where ServiceChoice.choice = False 
[EXCLUSIVE_SERVICE, ServiceChoice.service.code]
If Service.ServiceType.Category = INSURANCE then check service eligibility according to rule RecalculateCustomerOfferRequest - Insurance Eligibility for defined commodities on input, if any }with parameters: 
- OrigResponse
- Product
- Service 
which returns set of pairs (Service.InsuranceProgram, SumInsured).
- Service passes rule Service qualification criteria check with input parameters (Service, OriginalOffer.OFP.QualificationCriteria(code, value))
[QUALIFICATION_CRITERIA_NOT_MET, ServiceChoice.service.code]
	
- commodityCode - commodity on input must be assigned to existing offer [INSSERV_COMMODITY]

## 🔗 Connections (2)

- ← Dependency: [[{MOD}02.830 Recalculate Product Offers for External system]]
- → Dependency: [[RecalculateCustomerOfferRequest - Insurance Eligibility]]

## 📊 Appears In (1 diagrams)

- Use Case: Product Calculator for External system - Calculate/Recalculate
