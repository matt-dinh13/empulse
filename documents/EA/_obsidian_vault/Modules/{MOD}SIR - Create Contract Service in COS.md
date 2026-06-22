---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872744
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}SIR - Create Contract Service in COS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

The rule describes how to create Contract Service based on the input parameters in the COS module.
Input data:
- contractCode
{ADD DOBA-332}- accountNumber (optional){/ADD}
- contractSupplementCode
- service:
-- externalId
- serviceRoles:
-- partyUuid
-- roleCode'
-- validFrom
-- validTo (optional)
- financialParameters: -- array
-- amount
-- type
- serviceParameters: -- array
-- code
-- value
- reasonCode
- reasonNotice (optional)
- activateService (optional)

Output:

	
- ContractService


Steps:

	
- System calls https://cos.<environment>/rest/v1/contract-services with parameters from the input
	
- If Http 201 is returned from the call, system returns Contract ServiceId, otherwise respective error is returned

## 🔗 Connections (2)

- ← Dependency: [[{MOD}16.020 Process request for a loan]]
- ← Dependency: [[{MOD}16.040 Process Account Event notifications]]

## 📊 Appears In (3 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Add Contract and Account creation steps into processing - use cases
- Use Case: SIR - Processing of Account Event notifications
