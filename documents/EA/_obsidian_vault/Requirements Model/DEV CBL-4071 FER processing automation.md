---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1484 (CBL-4071) Full Early Repayment/Cooling Off Services Automation"
domain: "Requirements Model"
element_id: 1405684
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 DEV CBL-4071 FER processing automation

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1484 (CBL-4071) Full Early Repayment/Cooling Off Services Automation

## 📝 Notes

In order to allow the automatic FER processing without a request, we need to:
* Modify conditions of the daily job for FER evaluation to evaluate such FER contract service
* Modify use case 05.184 Reflect change of balance to register FER contracts for processing asynchronously
* Create a new job that will process registred async tasks automatically by calling a new use case 08.041
* Implement a new use case 08.041 Process FER automatically that will check and process FER with request (that has to be processed on balance change) and also FER without request (that has to be processed without request) - in that case a request is created

## 🔗 Connections (1)

- → Generalization: [[PAYM-1484 (CBL-4071) Full Early Repayment_Cooling Off Services Automation (Requirement 1405683)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1484 (CBL-4071) Full Early Repayment/Cooling Off Services Automation
