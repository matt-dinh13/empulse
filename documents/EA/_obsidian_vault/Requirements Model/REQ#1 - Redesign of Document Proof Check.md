---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5005 (CLM-2546) Document Purpose needed for client documents for CLX Loans"
domain: "Requirements Model"
element_id: 1463772
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Redesign of Document Proof Check

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5005 (CLM-2546) Document Purpose needed for client documents for CLX Loans

## 📝 Notes

Due to a change in definition of Document Type domain, it is needed to redesign the current Document proof check entity and involve this functionality into the current Document attribute entity.

Document Type domain modification (ensured by LOR team):

	
- Document Type Flag Type.PROOF_CHECK_REQ flag will be replaced with Document Type Attribute.Code = PROOF_CHECK related to the same Document Type. It means, if a proof check is needed for a document type, it is needed to attach Document Type Attribute.Code = PROOF_CHECK to the Document Type
	
- PROOF_CHECK Document Type Attribute definition:
- Usage = OPERATIONAL (new attribute)
- Custom Data Definition Code = Document Proof Check Type enumeration values
- Logical Datatype Code
- Is Visible = 1
- Active Flag = 1


Document domain modification:

	
- Document Proof Check entity will be no longer used. Instead of this, Proof check type (see Proof Check Type enumeration values) will be stored as value of the PROOF_CHECK Document Attribute
	
- The current data of Document Proof Check has to be migrated into the Document Attribute
Q: SMS_VERIFICATION - LOR has to cover this feature 


select * from ho.bsl_document_type dt join
ho.bsl_document_type_attr dta on dt.code = dta.document_type_code
where dt.code = 'PASSPORT';

select * from ho.bsl_document_proof_check dpf
where dpf.document_id = 23314968708;

select * from ho.bsl_document_attr da join
ho.bsl_document_attr_history dah on da.id = dah.parent_id
where da.document_id = 47632454003;

## 📊 Appears In (1 diagrams)

- Custom: CBL-5005 (CLM-2546) Document Purpose needed for client documents for CLX Loans
