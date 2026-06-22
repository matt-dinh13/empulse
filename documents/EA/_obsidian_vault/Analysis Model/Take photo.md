---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Photo component/User Interface Model/Photo component"
domain: "Analysis Model"
element_id: 1564934
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Take photo

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Photo component/User Interface Model/Photo component

## 📝 Notes

If the user clicks this button, system takes a photo.

Visible
Only if photo component has Auto capture mode disabled (configuration of the photo component).

Enabled
When:
- count of taken photos is equal to limit (received in parameter ParamPhotoDocAmountLimit on initialization) or limit is not set.
- the photo component automatically recognizes the human face (for PHOTO_CAPTURE_MODE = P)

Localization Code:
GEN_TakePhoto

## 📊 Appears In (1 diagrams)

- Custom: Photo component
