---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1973 (CBL-5228) CEL Reward - Disbursement channel changes"
domain: "Requirements Model"
element_id: 1392548
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 DEV CEL Reward - Disbursement channel changes

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1973 (CBL-5228) CEL Reward - Disbursement channel changes

## 📝 Notes

To implement the new requirements it is necessary to:
* Make the General bank account panel in Change reward payment channel modal window disabled (read-only) for reward method DEBIT_CARD
* Add new field Card number to HC debit card account selection modal window and display the last 4 digits of the card number (other digits should be displayed as *) - it will be obtained from truncated PAN by calling CardInfoWS_v2.getTruncatedPan() CABUS web service

## 🔗 Connections (2)

- → Generalization: [[PAYM-1973 (CBL-5228) CEL Reward - Disbursement channel changes (Requirement 1392549)]]
- ← Dependency: [[Feature switches]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1973 (CBL-5228) CEL Reward - Disbursement channel changes
