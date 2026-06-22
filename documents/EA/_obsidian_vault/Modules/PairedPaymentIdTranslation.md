---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for CBS Adapter/Logical Data Model"
domain: "Modules"
element_id: 1224442
diagrams: 1
connections: 0
tags:
  - enumeration
  - modules
---

# 📝 PairedPaymentIdTranslation

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for CBS Adapter/Logical Data Model

## 📝 Notes

This transformation table serves for transformation external IDs of (un)paired incoming payments from BSL to OBS (currently only in INSTALPAY124). 

Translation:

	
- Code = data exchange ID of (un)paired payment which HoSel knows
	
- Value = identification of (un)paired payment which OBS knows

## 📊 Appears In (1 diagrams)

- Logical: COMMON for CBSA - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Value | number |  |
