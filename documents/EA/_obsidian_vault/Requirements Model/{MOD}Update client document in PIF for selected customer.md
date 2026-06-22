---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8016 (CLM-2483) Replication of ID documents to PIF"
domain: "Requirements Model"
element_id: 1731357
diagrams: 4
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Update client document in PIF for selected customer

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8016 (CLM-2483) Replication of ID documents to PIF

## 📝 Notes

{ADD CLM-2483/}
This function updates client documents in PIF for selected customer.

Input:

	
- CUID
	
- Contract status
	
- Client document
	
- Contract creation date
	
- Audit


Constrains:

	
- Contract status in ('N','A')


	
- Client document->Document Type->Document Type Flag.Code = 'PRIM_IDENT'
	
- {ADD TFT-8309}Client document -> Document attributes [.Code = 'DOC_ID'].Value <> Null{/ADD}


Steps:

	
- System update the original client's document data in PIF by calling PIF REST Customer data.update with parameters:
- UpdateCustomerDataRequest.externalId = CUID
- UpdateCustomerDataRequest.mode = 'ATTRIBUTE'
- originationDate = Contract->Business_Event(.Type = 'Created').Modification_Date
- Audit.createdDate = AuditableEntity.creationDate
- Audit.modifiedBy = If AuditableEntity.updatedBy is not Null then AuditableEntity.updatedBy else AuditableEntity.createdBy
- Audit.modifiedDate = AuditableEntity.updatedDate
- activeYn = True
- VerificationLevel = TRUST_LEVEL_SYNCHRONIZATION = 7
-UpdateCustomerDataRequest.requestBody.Customer.Document = Document (all documents attributes Document Type->Document Type Attribute and their values Document->Document Type->Document Type Attribute->Document Atrributes)
{ADD CLM-3051}- If global parameter updateDmsIdInPif = True  then system fills Document.dmsId and Document.dmsIdBack
by calling the procedure  Fill DMS File attributes in update customer request with attribute document.{/ADD}
If call fails then system shows the error message MSG_0159 and function ends.
UpdateCustomerDataRequest.resultCode<> 'UPDATED' then system shows the error message MSG_CLIENT_CANNOT_BE_UPDATED_IN_CIF and function ends.

## 🔗 Connections (3)

- → Dependency: [[{ADD}Fill DMS File attributes in update customer request]]
- ← Dependency: [[{MOD}01.113 Edit client document]]
- ← Dependency: [[01.106 Add client document common]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-8016 (CLM-2483) Replication of ID documents to PIF
- Custom: REQ #2 - Send document.dmsId on KYC document update
- Custom: TFT-8309 -  Update to PIF client documetns with DOC_ID is not null
- Use Case: Edit client documents
