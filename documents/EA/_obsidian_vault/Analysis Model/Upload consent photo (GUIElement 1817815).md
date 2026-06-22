---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Common panel for consent - product AF"
domain: "Analysis Model"
element_id: 1817815
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Upload consent photo

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Common panel for consent - product AF

## 📝 Notes

Opens a modal window for uploading consent photo.

Other:
Visible when:
- ConsentUploadRequired = False, then after checkbox Consent is checked 

Localization code:
APP_UploadDocumentPhoto

## 🔗 Connections (3)

- ← Generalization: [[Upload consent photo]]
- → Dependency: [[01.088 Upload file (UseCase 1819817)]]
- → Realisation: [[LOR-957 Consent verification via OTP]]

## 📊 Appears In (1 diagrams)

- Custom: Common panel for consent - product AF
