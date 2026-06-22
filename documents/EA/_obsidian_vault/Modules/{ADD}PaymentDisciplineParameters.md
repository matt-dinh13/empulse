---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{ADD}Services"
domain: "Modules"
element_id: 1500415
diagrams: 5
connections: 4
tags:
  - class
  - modules
---

# 🔷 {ADD}PaymentDisciplineParameters

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{ADD}Services

## 📝 Notes

{ADD PCG-2095/}

## 🔗 Connections (4)

- ← Realisation: [[CELREWData]]
- ← Realisation: [[FBACKData]]
- ← Realisation: [[GIFTPData]]
- ← Realisation: [[GRPERData]]

## 📊 Appears In (5 diagrams)

- Logical: {ADD}Payment Discipline Parametres
- Logical: CELREW Data
- Logical: FBACK Data
- Logical: GIFTP Data
- Logical: GRPER Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| differToleranceForLastDpd | boolean |  |
| dpdAmountTolerance | Money |  |
| dpdDelayTolerance | int |  |
| dpdScope | string |  |
| lastDpdAmountTolerance | Money |  |
| lastDpdDelayTolerance | int |  |
