---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13407 Provide capability to Blaze to create another CLIP offer if previous one was cancelled by Blaze"
domain: "Requirements Model"
element_id: 1618826
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-13828 Adding a MMIL into Credit Limit Change notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13407 Provide capability to Blaze to create another CLIP offer if previous one was cancelled by Blaze

## 📝 Notes

The requirement is to update MMIL (maximal monthly installment limit) of the client after CLIP request processing. The MMIL value is calculate and provided by BLAZE in LAP output vector.

Notice: see also similar task CBL-13407 

Expected impact on CSI:

On the CLIP processing, the LAP/BLAZE approval is requested. Blaze will newly return a new MMIL value in response (preResult.instalmentPlan.mmil) if the CLIP request is approved.
the flag value should be stored in the Scoring entity related to the Contract Supplement (current function but check it!)
Credit limit change notification will be extended with MMIL value returned by BLAZE optional attribute. Consider group this attribute together with the attribute solved in CBL-13407

## 🔗 Connections (1)

- ← Generalization: [[REQ #1 - Returning LAP approval result into CLIP_CLDP notification]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-13407 Provide capability to Blaze to create another CLIP offer if previous one was cancelled by Blaze
