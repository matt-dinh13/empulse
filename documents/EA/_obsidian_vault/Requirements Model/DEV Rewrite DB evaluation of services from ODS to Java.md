---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-2254 (CBL-5507) Rewrite DB evaluation of services to Java"
domain: "Requirements Model"
element_id: 1434275
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 DEV Rewrite DB evaluation of services from ODS to Java

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-2254 (CBL-5507) Rewrite DB evaluation of services to Java

## 📝 Notes

In order to get rid of the ODS mechanism we need to:
* Implement UC 08.002 Check contract for service evaluation on external request as an alternative to UC 08.001 Check contract for service evaluation - it will just check whether any contract service is eligible to be processed
* Implement UC 08.004 Check and process services on contract as an alternative to UC 08.003 Evaluate services on contract - it will be triggered by a new system event instead of DB job
* Implement new system event ContractServiceEvaluationRequestedSE
* Implement UC 08.254 Check and process Cooling-off period and call both 08.250 and 08.252 from it
* Implement UC 08.054 Check and process Partial early repayment and call both 08.055 and 08.057 from it
* Add access rights for new UCs
* Implement feature switch to switch between old and new functionality

## 🔗 Connections (1)

- → Generalization: [[PAYM-2254 (CBL-5507) Rewrite DB evaluation of services to Java (Requirement 1434274)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-2254 (CBL-5507) Rewrite DB evaluation of services to Java
