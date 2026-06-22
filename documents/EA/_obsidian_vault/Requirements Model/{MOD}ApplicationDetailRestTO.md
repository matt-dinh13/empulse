---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/VN/LOR-11123 BRVN-425 - API Update "Process type" filed for MW CD"
domain: "Requirements Model"
element_id: 1873231
diagrams: 3
connections: 8
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}ApplicationDetailRestTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/VN/LOR-11123 BRVN-425 - API Update "Process type" filed for MW CD

## 🔗 Connections (8)

- ← Usage: [[Application (Class 1822915)]]
- → Dependency: [[KeyValue]]
- → Generalization: [[AbstractApplicationRestTO]]
- → Dependency: [[StatusHistory (Class 1822931)]]
- → Dependency: [[Offer (Class 1822921)]]
- → Dependency: [[ApplicationEvent (Class 1822924)]]
- ← Dependency: [[ApplicationDetailsRestTO]]
- → Dependency: [[{ADD}Process type]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-11123 BRVN-425 - API Update "Process type" filed for MW CD
- Custom: LOR-9169 Implement updateApprovedApplication method
- Logical: Application

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| events | ApplicationEvent |  |
| {ADD}processType | string |  |
| scoring | ScoringData |  |
| statusHistory | StatusHistory |  |
| status | string |  |
| substatus | string |  |
| offers | Offer |  |
| accountNumber | string |  |
