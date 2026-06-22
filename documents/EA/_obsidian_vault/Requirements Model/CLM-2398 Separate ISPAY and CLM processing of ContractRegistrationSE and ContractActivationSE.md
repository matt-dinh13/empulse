---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7042 (CLM-2398) Separate ISPAY and CLM processing of ContractRegistrationSE and ContractActivationSE"
domain: "Requirements Model"
element_id: 1439722
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-2398 Separate ISPAY and CLM processing of ContractRegistrationSE and ContractActivationSE

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7042 (CLM-2398) Separate ISPAY and CLM processing of ContractRegistrationSE and ContractActivationSE

## 📝 Notes

Currently there are two implementations of processContractRegistrationEvent/processContractActivationEvent (in outgoingPaymentServiceFacade and in contractServiceFacade) and they are executed synchronously during processing of ContractRegistrationSE/ContractActivationSE.

We will add new ContractRegistrationOutPaySE/ContractActivationOutPaySE system event to BSL and we will generate it together with ContractRegistrationSE/ContractActivationSE. ISPAY part will be then triggered by ContractRegistrationOutPaySE/ContractActivationOutPaySE and removed from processing of ContractRegistrationSE/ContractActivationSE.

In case of ContractRegistrationSE, calling of contractServiceServiceFacade.finishRegisteredContractOnServiceExecution() will be moved into contractServiceFacade.processContractRegistrationEvent() method and the current try-catch block will be removed.

## 🔗 Connections (1)

- → Generalization: [[CBL-7042 (CLM-2274) Monitor and reprocess failed financial JMS events]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-7042 (CLM-2398) Separate ISPAY and CLM processing of ContractRegistrationSE and ContractActivationSE
