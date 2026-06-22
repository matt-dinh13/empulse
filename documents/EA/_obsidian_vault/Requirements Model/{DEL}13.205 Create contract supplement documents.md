---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions"
domain: "Requirements Model"
element_id: 1879360
diagrams: 6
connections: 10
tags:
  - usecase
  - requirements-model
---

# 🎯 {DEL}13.205 Create contract supplement documents

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions

## 📝 Notes

--- obsolete, don't use it!!!
The technical use case is used for creating Contract Supplement documents including printouts generation. Documents are created automatically by setting of particular document types on a Supplement definition.
There are two categories of supplement documents created in the UC:

	
- Documents required from client by reason for particular supplement usage
	
- Supplement documents generated from the system - there are difference is usage between a Supplement related to a Loan Service and a standalone Supplement (without relation to a Loan Service)

All supplement documents defined on the Supplement and having Printout Template defined are always printed even though only Required Moment is defined.
If a generated document is intended for registration (process of documents checking), Contract Supplement registration status is set to "Ready for Registration".

## 🔗 Connections (9)

- ← Dependency: [[Get client documents needed to service request]]
- ← Dependency: [[Get supplement documents required for service request]]
- ← UseCase: [[CIF (Actor 1880899)]]
- → Dependency: [[Get Applicant by Id from CIF]]
- → Dependency: [[Set Contract Supplement registration status]]
- → Dependency: [[Get application data by code]]
- → Dependency: [[Generate printout of document]]
- → Dependency: [[Get client current data from CIF]]
- → Dependency: [[Get supplement documents required for Contract Supplement]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions
- Custom: CBL-8652 (CLM-2697) Enhancement API ContractDocument
- Custom: Extension of ALOP datasource
- Custom: REQ #3 - Update Contract Detail GUI to use UUID instead of DOCUMENT_REF
- Use Case: Loan restructuring request creation - via GUI
- Use Case: Use DMS in 13.205 Create contract supplement documents
