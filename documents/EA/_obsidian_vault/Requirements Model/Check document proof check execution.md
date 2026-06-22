---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5553 (CLM-2773) INVOICE document for Key Accounts/Home Appliances"
domain: "Requirements Model"
element_id: 1731365
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Check document proof check execution

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5553 (CLM-2773) INVOICE document for Key Accounts/Home Appliances

## 📝 Notes

This rule describes checking execution proof checks of client's documents related to a contract

Input parameters: 

	
- a list of Document (DO)

Output:

	
- result (TRUE/FALSE)


Steps:

	
- {ADD CLM-2546}For all DO having Document Attribute Type = PROOF_CHECK, system checks that at least one of proof check type from Document Proof Check Type java enumeration exists in DO -> Document Attribute.Value -- see examples for more info{/ADD} 
	
- {DEL CLM-2546}For DO having Document Type ->Document Type Flag Type = PROOF_CHECK_REQ, system checks that exists at least one active record in DO.Document Proof Check for each editable (Document Proof Check Type.Editable=TRUE) Document Proof Check Type{/DEL}
	
- If validation fails, return FALSE, else return TRUE


Example #1:

	
- 3 client's document for proof check exists to contract: PANCARD, UNIQUE_ID, Bank account statement
	
- Operator sets IDENTIFICATION_PROOF for UNIQUE_ID but the contract cannot be registered
	
- Operator sets ADDRESS_PROOF for UNIQUE_ID document - the contract can be registered


Example #2:

	
- 3 client's document for proof check exists to contract: PANCARD, UNIQUE_ID, Bank account statement
	
- Operator sets IDENTIFICATION_PROOF for PANCARD but the contract cannot be registered
	
- Operator sets ADDRESS_PROOF for UNIQUE_ID document - the contract can be registered


Example #3:

	
- 3 client's document for proof check exists to contract: PANCARD, UNIQUE_ID, Bank account statement
	
- Operator sets IDENTIFICATION_PROOF for UNIQUE_ID but the contract cannot be registered
	
- Operator sets IDENTIFICATION_PROOF for PANCARD but the contract cannot be registered
	
- Operator sets ADDRESS_PROOF for UNIQUE_ID document - the contract can be registered

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Validate documents before registration]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-5553 (CLM-2773) INVOICE document for Key Accounts/Home Appliances
