---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16401 (CLM-4704) - Process Kafka contract register"
domain: "Requirements Model"
element_id: 1710651
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-4704 Process Kafka contract register

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16401 (CLM-4704) - Process Kafka contract register

## 📝 Notes

Consume Kafka event contractRegistered and generate ContractRegisteredSE.

PAY ContractRegisteredSE processing

	
- Validate DDM:
- DDM.Status = NEW and DDM.DDM_Type =  STANDARD
- If global database parametervalidateDDM = True and Document[.Document_Type_Code = 'DIRECT_DEBIT_MANDATE'] -> Document_Attribute[.Code = 'PHYS_MANDATE_RECEIVED'].Value is Null and Document[.Document_Type_Code = 'DIRECT_DEBIT_MANDATE'] -> Document_Attribute[.Code = 'SCAN_BASED_MANDATE'].Value is Null then system returns error message (e.g. MSG_DDMDocumentAtributesNotFilled (e.g. DDM document attributes are not filled in).


	
- Receive DDM


CLM ContractRegisteredSE processing

	
- Create business event
	
- Remove contract from registration queue
	
- Update Client in PIF
- If global parameter UpdateClientDataMoment = CONTRACT_REGISTRATION
	
- Activate contract
- If Contract.Conditions Accepted = 'Accepted' (A) and Contract.Status = 'Signed' (N)
	
- generates a system event ContractRegistrationOutPaySE
	
- generates s system event ContractRegistrationSE

## 📊 Appears In (1 diagrams)

- Custom: CBL-16401 (CLM-4704) - Process Kafka contract register
