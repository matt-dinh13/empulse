---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination"
domain: "Requirements Model"
element_id: 1826909
diagrams: 2
connections: 14
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-16736 General requirement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination

## 📝 Notes

- adding services based on a sales quote (triggered by IN external system) - should be covered by an interpreter which receive a request (with a sales quote) and based on the sales quote content add respective service/services. The service interpreter should be implemented as a microservice (who will implement it? CSI/AM) - 3 sprints
	
- update APIs for adding service - it must be possible to add service without any relation to the original contract product
	
- create insurance contract on adding insurance service. Insurance Period length is set based on Insurance Service definition (expected is defined length in months). Insurance of goods is expected.
	
- notification by ContractService message (stop using CFI!!)
	
- terminate service by various triggers according service setting - first transaction (trial service), 12 billing periods (or less billing periods - Phase 3)

## 🔗 Connections (14)

- ← Generalization: [[CSI-1797 Extending ContractServiceNotification message]]
- ← Generalization: [[CSI-1959 Update Insurance Service activation method (Requirement 1721097)]]
- ← Generalization: [[CSI-1881 Update of the Create Contract Service method for new Service Catalogue]]
- ← Generalization: [[CSI-1882 Update of the Add Insurance Service method for new Service Catalogue (Requirement 1721095)]]
- ← Generalization: [[CSI-2094 Getting Loan Services based on new Service Catalogue (Requirement 1721094)]]
- ← Generalization: [[CSI-1711 Create API for Contract Service management]]
- ← Generalization: [[CSI-1986 SIR - Processing Contract Supplement notifications (Requirement 1826923)]]
- ← Generalization: [[CSI-1740 - Update method for TransactionSupplement creation (Requirement 1826916)]]
- ← Generalization: [[CSI-1690 Use ContractServiceNotification message variants for notificationsOOO]]
- ← Generalization: [[CSI-1741 - A new method for Sales Quote adding to TransactionSupplement (Requirement 1826913)]]
- ← Generalization: [[CSI-1875 Calling INSR data eligibility with CUID (Requirement 1826924)]]
- ← Generalization: [[CSI-1786 - Create a new method for Transaction authorization (Requirement 1826915)]]
- ← Generalization: [[CSI-1950 SIR - Transactions and VAS orchestration functionality]]
- ← Generalization: [[CSI-1777 - Create a method for getting Supplement setting (Requirement 1826911)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination
- Custom: Update BSL Contract Service methods
