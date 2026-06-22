---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API"
domain: "Requirements Model"
element_id: 1821072
diagrams: 4
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Update application DDM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API

## 📝 Notes

This object describes the steps, how system updates the data of selected direct debit mandate from the application.

Input:
- DirectDebitMandateCode = unique identifier of the direct debit mandate
- DirectDebitMandateData = relevant data of the direct debit mandate to be updated [BankAccountHolderName; BankAccountNumber; BankAccountType; BankBranchSyncCode; ContractCode; Currency; DDMFrequency; DDMType; DocumentUUID[]; ECSProviderCode; ExtendedProperty[{Key,Value}]; ExternalCode; JFSPartnerCode[]; LimitAmount; RegularPaymentAmount; RegularPaymentType; Status; ValidFrom; ValidTo]

Output:
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the DirectDebitMandateCode from the input and updates the data of the corresponding direct debit mandate by calling the respective REST API provided by the Payments module (i.e. PUT UpdateDDMOrDraftRequest) with following input parameters:
   - ddmCode = DirectDebitMandateCode
   - bankAccountData.* 
       - accountHolderName = DirectDebitMandateData[BankAccountHolderName]
       - accountNumber = DirectDebitMandateData[BankAccountNumber]
       - accountType = DirectDebitMandateData[BankAccountType]
       - bankBranchSyncCode = DirectDebitMandateData[BankBranchSyncCode]
   - contractCode = DirectDebitMandateData[ContractCode]
   - ddmFrequency = DirectDebitMandateData[DDMFrequency]
   - ddmType = DirectDebitMandateData[DDMType]
   - documentData.*
       - uuid = DirectDebitMandateData[DocumentUUID]
   - ecsProviderCode = DirectDebitMandateData[ECSProviderCode]
   - extendedProperties.*
       - key = DirectDebitMandateData[ExtendedProperty.Key]
       - value = DirectDebitMandateData[ExtendedProperty.Value]
   - externalCode = DirectDebitMandateData[ExternalCode]
   - jfsPartner.*
       - code = DirectDebitMandateData[JFSPartnerCode]
   - limit.*
       - amount = DirectDebitMandateData[LimitAmount]
       - currency = DirectDebitMandateData[Currency]
   - regularPaymentData.*
       - regularPaymentTypeCode = DirectDebitMandateData[RegularPaymentType]
       - regularPaymentAmount.*
           - amount = DirectDebitMandateData[RegularPaymentAmount]
           - currency = DirectDebitMandateData[Currency]
   - status = DirectDebitMandateData[Status]
   - validFrom = DirectDebitMandateData[ValidFrom]
   - validTo = DirectDebitMandateData[ValidTo]


If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on its type accordingly - in case the direct debit mandate was not successfully updated (i.e. for the response with .code <> '200' (OK)), system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object.
	
- Algorithm ends.

## 🔗 Connections (3)

- ← Dependency: [[{MOD}01.422 Update application DDM]]
- ← Dependency: [[Save application DDM data]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Custom: LOR-9306 - Update direct debit mandate from Application detail via DDM REST API
- Custom: LOR-9342 - Validate direct debit mandates via DDM REST API
- Custom: Operations with application DDM
