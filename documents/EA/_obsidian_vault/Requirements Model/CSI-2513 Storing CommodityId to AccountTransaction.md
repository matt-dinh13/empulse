---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19094 (CSI-2286) EMI Card and Flexi transactions approval"
domain: "Requirements Model"
element_id: 1757337
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2513 Storing CommodityId to AccountTransaction

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19094 (CSI-2286) EMI Card and Flexi transactions approval

## 📝 Notes

Goal of this requirement is storing commodityId of purchased goods into the Account Transaction object related to the Transaction Supplement and the master sales quote.
The commodityId value is needed for the EMI transaction scoring so it must be obtained from SQS before this step.

## 📊 Appears In (2 diagrams)

- Custom: CBL-19094 (CSI-2286) EMI Card and Flexi transactions approval
- Custom: CBL-19794 (CSI-2470) Additional attributes for Transaction Suplement
