---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6256 (CLM-2060) Select all documents for registration"
domain: "Requirements Model"
element_id: 1868363
diagrams: 3
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ Barcode scanning form

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6256 (CLM-2060) Select all documents for registration

## 📝 Notes

The element is visible for user with access right 01.272 Check presence of document with barcode reader. The element is floating - when page is scrolled down/up button  stays visible under top edge of the web browser (it returns to original position after scrolling on the top). Form with elements is visible only if Contract.RegistrationStatus ir NRR or RR (is invisible for registered contracts.)

Element is just container for:

	
- Button which activates/deactivates barcode scanning functionality
	
- Error message element - which is visible when mistake occurs in UC0.1272. Is hidden by default,  after successful execution of UC0.1272 and after deactivation of bar-code scanning functionality

## 📊 Appears In (3 diagrams)

- Custom: CBL-6256 (CLM-2060) Select all documents for registration
- Custom: Contract registration
- Custom: REQ #1 - Add radio buttons Registration and Mistake investigation
