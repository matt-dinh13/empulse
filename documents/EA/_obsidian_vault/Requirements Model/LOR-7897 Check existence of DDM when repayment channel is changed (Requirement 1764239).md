---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-7897 Check existence of DDM when repayment channel is changed"
domain: "Requirements Model"
element_id: 1764239
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-7897 Check existence of DDM when repayment channel is changed

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-7897 Check existence of DDM when repayment channel is changed

## 📝 Notes

If useDDMREST is switched on and repayment channel is changed from any value to DDM then application2DDM(contract2DDM) must exist.

 

Proposed solution:
 

	
- implementation of check  that DDM is already created for the processed application (existing external code in app2ddm/contract2ddm)) when useDDMREST is switched on in appropriate status (UC 01.659) - calling get DDM method that returns not only existing DDM not in status = CNC, FIN, RFC and confirmation status = R but also DDM drafts in  application2DDM(contract2DDM)

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-7897 Check existence of DDM when repayment channel is changed
