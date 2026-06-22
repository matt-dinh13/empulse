---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2353 - OBS interface - Installment schedule (REL)"
domain: "Modules"
element_id: 821276
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 REQ#1 Message INSTALMENT125

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2353 - OBS interface - Installment schedule (REL)

## 📝 Notes

Comm tables:

	
- new comm table INSTALMENT125
	
- new type INSTALMENT125TypeInstalHead
	
- new type INSTALMENT125TypeInstalment
	
- new type INSTALMENT125ReconciliationType


JMS:

	
- new message InstalmentMessageDto
	
- new XSD types InstalmentTypeDto and ReconciliationTypeDto


Business rules:
New rule "Processing InstalmentMessageDto" and calling it from Processing MessageEnvelopeDto

Initial setting of INSTALMENT125TypeInstalment enum.

## 🔗 Connections (2)

- ← Dependency: [[Processing MessageEnvelopeDto]]
- ← Dependency: [[Processing InstalmentMessageDto]]

## 📊 Appears In (1 diagrams)

- Custom: BRR-2353 - OBS interface - Installment schedule (REL)
