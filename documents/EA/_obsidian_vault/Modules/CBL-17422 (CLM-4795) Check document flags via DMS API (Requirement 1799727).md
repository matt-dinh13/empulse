---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-17422 (CLM-4795) Check document flags via DMS API"
domain: "Modules"
element_id: 1799727
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CBL-17422 (CLM-4795) Check document flags via DMS API

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-17422 (CLM-4795) Check document flags via DMS API

## 📝 Notes

{ADD CLM-4795/}

Instead of checking directly in the database, use DMS REST API to check documents for their flags, using a filter object for the method call parameter. 

	
- Set the Document flag filter field to the required value (e.g. CONTRACT)
	
- Set the Document UUIDs filter field to the (list of) document UUID(s) to check.
	
- In the response, find only the document(s) that meet(s) the criteria set by the filter object.


This checking method will be applied for the following API:
 

	
- REST getContract
	
- REST searchContract
	
- REST getContractDocument
	
- Kafka ContractEvent

## 📊 Appears In (1 diagrams)

- Custom: CBL-17422 (CLM-4795) Check document flags via DMS API
