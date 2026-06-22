---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-28112 (CSI-3764) PER setting and calculation update"
domain: "Requirements Model"
element_id: 1869783
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Update PER service setting

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-28112 (CSI-3764) PER setting and calculation update

## 📝 Notes

PER service definition will be extended by following options:

Maximal Number Of Usage - defines maximal number of service requests per contract

Minimal Remaining Principal - defines minimal principal amount which will stay after PER request execution, can be defined in one of the following possible way:
- no setting => Minimal Remaining Principal = 0
- fixed amount => Minimal Remaining Principal = fixed amount
- percentage of Total Principal => Minimal Remaining Principal = percentage of Total Principal * Total Principal
- percentage of Outstanding Principal => Minimal Remaining Principal = percentage of Outstanding Principal * Outstanding Principal

## 📊 Appears In (1 diagrams)

- Custom: CBL-28112 (CSI-4215) PER setting and calculation update
