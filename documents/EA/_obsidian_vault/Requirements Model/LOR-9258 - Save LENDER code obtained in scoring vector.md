---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9145 - Revamp customer loan journey"
domain: "Requirements Model"
element_id: 1744964
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9258 - Save LENDER code obtained in scoring vector

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9145 - Revamp customer loan journey

## 📝 Notes

As Loan Origination module, I need to be able to save the applicable lender data onto the processed application whenever the primary lender (party with major financing share to be owning the respective contract) has been determined during the application evaluation, so such information can be further used in the process as usual even for this new, more dynamic approach of deciding about the entrustment lender.

Solution proposal:

	
- Extend the list of fullpaths requested from LAP provided during the scoring initiation with respective 'postCheck' ones.
	
- In case the specific vector fullpath containing the information about the entrustment lending partner code (i.e. lender.partners[].name where lender.partners[].selected=TRUE) is received along with the main scoring result, save such information onto the application (BSL_RELATIONSHIP[.ROLE_TYPE='LENDER'] structure).
- Get the particular lending partner's share percentage from the BSL_LENDER database table and save it into the respective LENDER relationship structure.

## 🔗 Connections (1)

- → Realisation: [[LOR-9145 - Revamp customer loan journey]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9145 - Revamp customer loan journey
