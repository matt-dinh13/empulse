---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1504985
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 {MOD}ServiceINSURANCEDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 📝 Notes

Specific for Service.ServiceType.Category = INSURANCE

## 🔗 Connections (3)

- ← Dependency: [[{MOD}ServiceTypeDataDto]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «mapping»: [[Insurance Service (Class 1827152)]]

## 📊 Appears In (2 diagrams)

- Logical: Service data synchronization mapping
- Logical: Service INSURANCE Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| numberOfBillingPeriods | number |  |
| automaticProlongation | boolean |  |
| firstPeriodDuration | string |  |
| firstPeriodDurationOffset | number |  |
| firstPeriodTrigger | string |  |
| firstPeriodTriggerOffset | number |  |
| nextPeriodDuration | string |  |
| nextPeriodDurationOffset | number |  |
| insuranceProgramCode | string |  |
| maxLoanAmount | MoneyType |  |
| refundOnManualTermination | string |  |
| terminateOnFullLoanRepayment | boolean |  |
| earlyTerminationTerm | string |  |
| cutOffDaysCount | number |  |
| termCountLimit | number |  |
| insuranceCancellationOffset | number |  |
| insuranceTerminationOffset | number |  |
| {ADD}limitCancellationToCOP | boolean |  |
