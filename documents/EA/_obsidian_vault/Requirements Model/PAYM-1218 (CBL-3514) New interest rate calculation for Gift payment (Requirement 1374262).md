---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1218 (CBL-3514) New interest rate calculation for Gift payment"
domain: "Requirements Model"
element_id: 1374262
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-1218 (CBL-3514) New interest rate calculation for Gift payment

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1218 (CBL-3514) New interest rate calculation for Gift payment

## 📝 Notes

The algorithm of gift payment processing for 'covered by interest' variant is not working for contracts with high interest rates (>= 100%). The reason is following: new interest rate for IS generating after granting the gift payment is calculated by XIRR algorithm which doesn't return correct results for original interest rates higher than 100%.

In TFT-1214 we came up with a new algorithm for the new interest rate calculation suitable for working also with high interest rates. It is based on guessing interest rate for lowered number of terms using split search and calling Annuity calculation algorithm for every guessed IR amount. Once the algorithm gets the original annuity of the contract for a guessed IR and lowered number of terms, it ends. IS is consequently regenerated with the new financial parameters including new IR.

The new algorithm passed the tests on test data but fails to calculate a new IR correctly for real data. The reason is following: Annuity calculation algorithm was called with null startDate parameter and set it internally to current date (instead of loan providing date).

## 🔗 Connections (1)

- ← Generalization: [[Use correct startDate for annuity calculation]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1218 (CBL-3514) New interest rate calculation for Gift payment
