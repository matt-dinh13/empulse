---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5507 (CLM-2841) Simultaneous processing of regular jobs and payment pairing "
domain: "Requirements Model"
element_id: 1688784
diagrams: 1
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 Debt Catalog (DC) to trigger contract finishing evaluation

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5507 (CLM-2841) Simultaneous processing of regular jobs and payment pairing 

## 📝 Notes

{ADD CLM-2841}

In PAYM-2214 (IS-664) ISPAY team has prepared a solution of asynchronous DC calculation in order to remove it from  _05.180 Perform coupling payments with instalments_ as it causes many troubles during batch payment pairing. Unfortunately they found out that the DC calculation (_01.474 Calculate CEL debt info_) cannot be removed and done asynchronously because currently the contract finishing is triggered by generating SE after the coupling and it relies on existence of already updated (recalculated) DC.

Both coupling and contract finishing are called from the following UCs:
* 08.280 Check and process CET request (finishing triggered by LoanServiceRequestExecutedSE)
* 03.100 Check and process Early repayment request (finishing triggered by LoanServiceRequestExecutedSE)
* 08.057 Perform Partial early repayment (finishing triggered by LoanServiceRequestExecutedSE)
* 08.252 Process cooling-off period (finishing triggered by COPExecutedSE or LoanServiceRequestExecutedSE)
* 08.362 Process payment holiday request (finishing triggered by LoanServiceRequestExecutedSE)
* 08.063 Process request for change due date (finishing triggered by LoanServiceRequestExecutedSE)
* 01.384 Finalize contract consolidation (finishing triggered by LoanServiceRequestExecutedSE)
* 08.406 Process request for loan restructuring (finishing triggered by LoanServiceRequestExecutedSE)
* 08.407 Evaluate CheckTL fulfillment common (finishing triggered by LoanServiceRequestExecutedSE)

We have to change the design to execute contract finishing only once the DC is recalculated (otherwise the contract finishing evaluation could be done on basis of an obsolete debt catalog). DC will trigger contract finishing by generating LoanServiceRequestExecutedSE or some new SE. The flow will be as follows:

Service processing -> Coupling payments with installments -> asynchronously triggers DC calculation -> asynchronously triggers Contract finishing (if needed)

We need to avoid circular dependencies - currently _01.715 Finish contract automatically_ always calls DC calculation (_01.474 Calculate CEL debt info_) + it sometimes creates a payment of type Small underpayment that triggers Coupling that triggers DC calculation.

Details of the asynchronous DC solution that is ready for use can be found in the attached email from Tom Klou�ek.

## 🔗 Connections (6)

- ← Generalization: [[Use asynchronous DC recalculation for updateAccountDebtInfo JMS_WS]]
- ← Generalization: [[Separate SAI condition acceptance]]
- ← Generalization: [[Implement switches for calling Debt Catalog recalculation asynchronously]]
- ← Generalization: [[Separate DC recalculation from contract cancellation]]
- ← Generalization: [[Remove debt checks from contract finishing]]
- ← Generalization: [[Call updateDebtStatistics after finishing of debtCatalogueProcessing job]]

## 📊 Appears In (1 diagrams)

- Custom: Debt Catalog (DC) to trigger contract finishing evaluation (IS-639)
