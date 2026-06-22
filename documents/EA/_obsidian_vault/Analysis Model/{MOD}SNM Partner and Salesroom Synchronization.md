---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules"
domain: "Analysis Model"
element_id: 1610891
diagrams: 2
connections: 15
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}SNM Partner and Salesroom Synchronization

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules

## 📝 Notes

For a Partner or Salesroom (object) the system does the synchronization as follows:

If object does not exist in BSL database, it is created including related entities (addresses, bank accounts, employees, etc.):
-- At first system creates a new record for the entity (partner or salesroom) and, afterwards, if the entity was created successfully, system creates records for the related entities.
-- Non-mandatory attributes whose values are not sent in the message are set to 'NULL'

If object already exists in BSL database: 
-- If there are any changes of object, system makes update according to historization rules.
-- If there are any changes of entity related to particular existing object with validity interval (validFrom/To), system finishes current interval of validity and creates new one with new data and unfinished validity.
-- If there are any changes of entity related to particular existing object without validity interval, system marks current record of entity as archived and creates new record new one with new data.

If Entity is (PARTNER, SALESROOM) then object is synchronized according to following rules:
- SN synchronization - Contact persons
- SN synchronization - Payment status
- SN synchronization - Bank accounts
- SN synchronization - Other attributes
- SN synchronization - Business areas
- SN synchronization - Cobrand groups
- SN synchronization - Status
- SN synchronization - Users

If Entity is (SALESROOM) then validate also according to:
- SN synchronization - Salesman
- SN synchronization - Salesroom document types
- SN synchronization - Sales area
- SN synchronization - Salesroom other attributes
- {ADD}SN synchronization - Experimental feature 

If the GlobalParameter.UseSalesAreaAsZone = 'TRUE' and the SN object is salesroom then: if the sales area of the salesroom has been changed within this run of synchronization, all assigned products are removed from the salesroom (Valid_to of their assignment is set to 'current date and time').

If a step of the synchronization cannot be completed successfully then the algorithm ends with error.

If Entity = PARTNER {ADD PCG-2987}globalParameter.GenerateSystemEventOnSNMEntityChange = true (SNM_ENTITY_CHANGE_SE_GEN){/ADD} then system generates a system event PartnerChangedSE with processed Partner ID 
If Entity = SALESROOM {ADD PCG-2987}globalParameter.GenerateSystemEventOnSNMEntityChange = true (SNM_ENTITY_CHANGE_SE_GEN){/ADD} then system generates a system event SalesroomChangedSE with processed Salesroom ID

## 🔗 Connections (14)

- → Dependency: [[SN synchronization - Payment status]]
- → Dependency: [[SN synchronization - Sales area]]
- → Dependency: [[SN synchronization - Users]]
- → Dependency: [[SN synchronization - Experimental feature]]
- → Dependency: [[SN synchronization - Bank accounts]]
- → Dependency: [[SN synchronization - Salesroom document types]]
- → Dependency: [[SN synchronization - Salesroom other attributes]]
- → Dependency: [[SN synchronization - Contact persons]]
- ← Dependency: [[Algorithm_Synchronization of SN object]]
- → Dependency: [[SN synchronization - Status]]
- → Dependency: [[SN synchronization - Business areas]]
- → Dependency: [[SN synchronization - Cobrand groups]]
- → Dependency: [[SN synchronization - Other attributes]]
- → Dependency: [[SN synchronization - Salesmans]]

## 📊 Appears In (2 diagrams)

- Custom: SNM Partner and Salesroom Synchronization
- Custom: SNM Synchronization
