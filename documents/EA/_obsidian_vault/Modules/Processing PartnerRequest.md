---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2206 - OBS interface - Sales network"
domain: "Modules"
element_id: 816328
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Processing PartnerRequest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2206 - OBS interface - Sales network

## 📝 Notes

This business rule describes processing of creating/updating partner/salesroom of JMS message (PartnerRequest) from HoSel and its transformation into comm tables.

Input:

	
- PartnerRequest


Algorithm:
IF (partner status <> "N" AND exists salesroom of the partner with status <> "N")  THEN
        System creates a record in the comm table SELLERPLACE130 with the following parameters for each partner salesroom with status <> "N":


	
- Account name = PartnerRequest.bankAccountHolderName
	
- Activity end = SalesroomDto.endOfActivity (IF NULL THEN USE PartnerRequest.endOfActivity )
	
- Activity start = SalesroomDto.activationDate (IF NULL THEN USE PartnerRequest.activationDate )
	
- Bankcode = SalesroomDto.bankCode
	
- Bin = PartnerRequest.panNumber 
	
- Kbe= PartnerRequest.legalForm     ... trim on the first two characters
	
- Name = SalesroomDto.name
	
- Note = NULL


	
- Num account = SalesroomDto.accountNumber  (IF NULL THEN USE PartnerRequest.accountNumber)


	
- Sellerplace code = SalesroomDto.code
	
- Status= SalesroomDto.status
	
- Stop payfrom = 

                 IF SalesroomDto.paymentStatus <>SalesroomDto.previousPaymentStatus 
                     AND SalesroomDto.paymentStatus IS 'D' THEN Current date OTHERWISE NULL

	
- Stop payto = 

                 IF SalesroomDto.paymentStatus  <>SalesroomDto.previousPaymentStatus 
                     AND SalesroomDto.paymentStatus IS NOT 'D' THEN Current date OTHERWISE NULL 

	
- Taxnum = PartnerRequest.taxIdentificationNumber
	
- Time stamp = current date and time
	
- Type sellerplace = PartnerRequest.partnerType

## 🔗 Connections (2)

- ← Dependency: [[PartnerRequest]]
- ← Dependency: [[{MOD}PartnerRequest]]

## 📊 Appears In (3 diagrams)

- Custom: BRR-2206 - OBS interface - Sales network
- Custom: Business rules
- Logical: Sales Network - Communication model
