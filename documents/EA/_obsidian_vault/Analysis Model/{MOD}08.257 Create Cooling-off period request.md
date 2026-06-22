---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Cooling-off period/Access Rights"
domain: "Analysis Model"
element_id: 1862257
diagrams: 9
connections: 12
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.257 Create Cooling-off period request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Cooling-off period/Access Rights

## 📝 Notes

After the client is familiar with amounts and accept conditions for the ER under Cooling-off period, it is possible to create request for ER. The ER request contains information about amount which needs to be paid and about date when this amount needs to be paid.

If a print of a document related to ER request is required, there is needed to define particular document type as well as printout template for the COP Early Repayment service.
If the document and its print template are defined, the ER document printout is generated and stored to the COP ER request for its possible print. All these documents (printouts) are stored in the File Store (Cabinet) for further use.

Frequency of usage:
   A few requests a day created by back-office operators
Actor:
  Authorized user

## 🔗 Connections (10)

- ← Dependency: [[ER request]]
- ← Dependency: [[Create request (GUIElement 1586758)]]
- → Dependency: [[Deactivate contract early termination requests]]
- → Realisation: [[08.257 Create Cooling-off period request]]
- → UseCase «include»: [[{MOD}03.070 Calculate early repayment amount]]
- → UseCase «include»: [[01.360 Cancel contract (UseCase 1850507)]]
- → Dependency: [[Check concurrent active loan services and requests rule]]
- → Dependency «call»: [[{ADD}08.002 Check contract for service evaluation on external request]]
- → UseCase «include»: [[08.001 Check contract for service evaluation (UseCase 1872538)]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (9 diagrams)

- Custom: Access Rights
- Custom: CBL-9870 (CSI-92) COP Event information - Loan Service Request JMS
- Custom: CLM-6037 - BSL - Contract cancellation update
- Custom: COP Early repayment preview
- Use Case: CLM-6027 Update COP processing for Standalone PPI
- Use Case: Cooling-off period request
- Use Case: CSI-1119 Use DMS in UC 08.356 Generate service request document
- Use Case: Evaluation of services on system events (Java)
- Use Case: PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment
