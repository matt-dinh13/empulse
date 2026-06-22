---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9359 - Completely remove sign pad feature"
domain: "Requirements Model"
element_id: 1817800
diagrams: 3
connections: 3
tags:
  - guielement
  - requirements-model
---

# 🖥️ {MOD}OTP consent verification

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9359 - Completely remove sign pad feature

## 📝 Notes

The panel is visible if:

	
- User has the UC01_145 privilege granted.
	
- Salesroom.SignConsentViaOTP = TRUE and
	
- Primary mobile is filled correctly.
	
- UC 01.087 Print consent is successfully completed.

## 🔗 Connections (3)

- ← Generalization: [[ID Verification panel]]
- → Realisation: [[OTP (Feature 1822789)]]
- ← Realisation: [[01.199 Display public verification panel for consent (UseCase 1819573)]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9359 - Completely remove sign pad feature
- Custom: Public verification panel
- Custom: Verification panel
