---
type: Boundary
stereotype: ""
package: ""
domain: "_Uncategorized"
element_id: 1300683
diagrams: 0
connections: 11
tags:
  - boundary
  - _uncategorized
---

# 🔲 REQ#1 Send data for Bank, Bank Branch, Commodity Category, Commodity type from BSL to HSIS

> **Type**: Boundary
> **Package**: N/A

## 📝 Notes

Name=REQ#1 Send data for Bank, Bank Branch, Commodity Category, Commodity type from BSL to HSIS;Type=Requirement;

## 🔗 Connections (11)

- ← Realisation: [[{MOD} 00.170 Update bank]]
- ← Realisation: [[{MOD} 00.130 Update bank branch]]
- ← Realisation: [[{MOD} 00.160 Create bank]]
- ← Realisation: [[{MOD} 00.120 Create bank branch]]
- ← Realisation: [[{DEL}02.450 Manage commodity categories]]
- ← Realisation: [[{DEL}02.480 Provide Commodity Category Data]]
- ← Realisation: [[{DEL}02.470 Provide Commodity Type Data]]
- ← Realisation: [[{DEL}02.460 Deactivate commodity type]]
- ← Realisation: [[{DEL}02.440 Update commodity type]]
- ← Realisation: [[{ADD} 00.190 Provide Bank Data (UseCase 1861967)]]
- ← Realisation: [[{ADD} 00.200 Provide Bank Branch Data (UseCase 1861960)]]
