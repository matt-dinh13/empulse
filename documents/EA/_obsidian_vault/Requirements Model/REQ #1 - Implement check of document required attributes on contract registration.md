---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5553 (CLM-2773) INVOICE document for Key Accounts/Home Appliances"
domain: "Requirements Model"
element_id: 1515641
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Implement check of document required attributes on contract registration

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5553 (CLM-2773) INVOICE document for Key Accounts/Home Appliances

## 📝 Notes

Goal of this task is to implement validation for registration documents. These documents are not allowed to have required document attributes with null value.

Steps:

	
- Add warning message  as a highlighted value to each required document type attributes, which does not exist in document attributes
	
- Disable the button 'Check' if any required attribute from document types attributes does not exist in document attributes.
	
- Disable the button 'Register' if any required attribute from document types attributes does not exist in document attributes.
	
- Add validation for non existing required document attributes to UC01.273. Failed validation should return error message MSG_DDMDocumentAtributesNotFilled (e.g. DDM document attributes are not filled in) for BSL GUI and reponse MSG_DDMDocumentAtributesNotFilled for web service.
	
- Move validations (no null document required attribute value, check presence, proof check and no critical mistake on document) from UC01.270, UC01.271 to UC01.273.



Note: This feature is controlled by CLM Feature Flag validateRequiredDocumentAttributes.

## 📊 Appears In (1 diagrams)

- Custom: CBL-5553 (CLM-2773) INVOICE document for Key Accounts/Home Appliances
