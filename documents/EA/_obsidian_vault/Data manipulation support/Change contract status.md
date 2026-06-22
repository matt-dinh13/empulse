---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation"
domain: "Data manipulation support"
element_id: 1584680
diagrams: 1
connections: 14
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 Change contract status

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation

## 📝 Notes

This use case describes change of contract status and possibly sub status by input parameters. This UC is used by all use cases which perform some type of contract status manipulation.

## 🔗 Connections (14)

- ← UseCase «include»: [[Set Rejected contract to In Process status]]
- ← UseCase «include»: [[Set Written-off contract to Finished status]]
- ← UseCase «include»: [[Set Signed contract to Finished status]]
- ← UseCase «include»: [[Set Canceled contract to Active status]]
- ← UseCase «include»: [[Cancel contract in In Process status]]
- ← UseCase «include»: [[Set Rejected contract to Approved status]]
- ← UseCase «include»: [[Set Paid-off contract to Active status]]
- ← UseCase «include»: [[Set Finished contract to Paid-off status]]
- ← UseCase «include»: [[Set Paid-off contract to Cancel status]]
- ← UseCase «include»: [[Cancel contract in In Pre-Process status]]
- ← UseCase «include»: [[Set Canceled contract to Signed when it was Approved only]]
- ← UseCase «include»: [[Set Canceled contract to Signed status]]
- ← UseCase «include»: [[Set Rejected contract to Cancel status]]
- ← UseCase «include»: [[Set Written-off contract to Cancel status]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract status manipulation
