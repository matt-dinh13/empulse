---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/cancelDDM"
domain: "Analysis Model"
element_id: 1699813
diagrams: 18
connections: 55
tags:
  - interface
  - analysis-model
---

# 🔶 DirectDebitService

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/cancelDDM

## 📝 Notes

{ADD CBL-29 PAY /}

## 🔗 Connections (45)

- ← Dependency: [[updateDDMDocumentRequest]]
- → Dependency: [[getDDMByCodeResponse]]
- → Dependency: [[getDDMByContractFault]]
- → Dependency: [[GetDDMByDataExchangeIDResponse]]
- → Dependency: [[CalculateDDMLimitRequest]]
- → Dependency «invoke»: [[{ADD}01.588 - Get DDM Data Exchange ID (UseCase 1862017)]]
- → Dependency «invokes»: [[01.586 - Get DDM by code (UseCase 1862021)]]
- → Dependency: [[updateDDMDocumentResponse]]
- → Dependency: [[CancelDDMResponse]]
- → Dependency «invokes»: [[14.661 Change repayment channel via WS (UseCase 1862015)]]
- → Dependency: [[CalculateDDMLimitResponse]]
- → Dependency: [[UpdateDDMRequest]]
- → Dependency: [[CreateDDMRequest (Class 1710857)]]
- → Dependency: [[UpdateDDMResponse]]
- → Dependency: [[GetDDMByContractRequest]]
- → Dependency: [[SuspendDDMResponse]]
- → Dependency: [[CancelDDMFault]]
- → Dependency «invokes»: [[01.584 - Get DDM by contract (UseCase 1862007)]]
- → Dependency: [[updateDDMDocumentFault]]
- → Dependency: [[ResumeDDMForContractRequest]]
- → Dependency: [[GetDDMByDataExchangeIDRequest]]
- → Dependency: [[{MOD}14.421 Create DDM via WS]]
- → Dependency: [[GetDDMByCUIDResponse]]
- → Dependency «invokes»: [[{ADD}14.424 Change DDM status via WS (UseCase 1862014)]]
- → Dependency «invoke»: [[{ADD}14.425 Calculate DDM limit via WS (UseCase 1862012)]]
- → Dependency: [[CreateDDMResponse]]
- → Dependency: [[CancelDDMRequest]]
- → Dependency: [[ChangeDDMStatusResponse]]
- → Dependency: [[UpdateDDMRequest (Class 1710853)]]
- → Dependency: [[getDDMByCodeRequest]]
- → Dependency: [[ChangeDDMStatusRequest]]
- → Dependency: [[CreateDDMFault]]
- → Dependency «invokes»: [[01.583 - Get DDM by CUID]]
- → Dependency: [[ChangeDDMStatusFault]]
- → Dependency: [[GetDDMByCUIDRequest]]
- → Dependency «invokes»: [[01.582 - Resume DDM on request (UseCase 1331738)]]
- → Dependency: [[UpdateDDMFault]]
- → Dependency: [[CreateDDMRequest]]
- → Dependency: [[SuspendDDMForContractRequest]]
- → Dependency «invokes»: [[{MOD}14.423 Cancel DDM via WS]]
- → Dependency «invokes»: [[{MOD}14.422 Update DDM via WS]]
- → Dependency «invokes»: [[01.581 - Suspend DDM on request (UseCase 1331735)]]
- → Dependency: [[CalculateDDMLimitFault]]
- → Dependency: [[ResumeDDMResponse]]
- → Dependency: [[GetDDMByContractResponse]]

## 📊 Appears In (18 diagrams)

- Logical: DirectDebitMandate.cancelDDM
- Logical: DirectDebitService
- Logical: DirectDebitService.calculateDDMLimit
- Logical: DirectDebitService.changeDDMStatus
- Logical: DirectDebitService.createDDM
- Logical: DirectDebitService.getDDMByCode
- Logical: DirectDebitService.getDDMByContract
- Logical: DirectDebitService.getDDMByCUID
- Logical: DirectDebitService.getDDMByDataExchangeID
- Logical: DirectDebitService.resumeDDM
- Logical: DirectDebitService.suspendDDM
- Logical: DirectDebitService.updateDDM
- Logical: directDebitService.updateDDMDocument
- Logical: DirectDebitServiceV5
- Logical: DirectDebitServiceV5 - Create DDM
- Logical: DirectDebitServiceV5 - Get DDM by contract
- Logical: DirectDebitServiceV5 - Get DDM by CUID
- Logical: DirectDebitServiceV5 - Update DDM
