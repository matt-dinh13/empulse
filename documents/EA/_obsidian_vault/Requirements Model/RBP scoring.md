---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8412 BOS/Zeebe implementation of PST: consumers calling new APIs part 1/LOR-8966 Run RBP via Zeebe"
domain: "Requirements Model"
element_id: 1613050
diagrams: 2
connections: 0
tags:
  - class
  - requirements-model
---

# 🔷 RBP scoring

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8412 BOS/Zeebe implementation of PST: consumers calling new APIs part 1/LOR-8966 Run RBP via Zeebe

## 📝 Notes

Record in this entity contains RBP scoring result and the datetime when the result was obtained from LAP.

## 📊 Appears In (2 diagrams)

- Custom: LOR-8966 Run RBP via Zeebe
- Logical: RBP scoring

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| request ID | number(18) |  |
| cuid | number(18) |  |
| result | varchar2(30) |  |
| result date | datetime |  |
| applicantID | string |  |
| sourceChannel | string |  |
