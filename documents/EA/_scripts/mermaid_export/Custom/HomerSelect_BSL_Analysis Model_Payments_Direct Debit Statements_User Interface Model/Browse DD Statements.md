# Browse DD Statements

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/User Interface Model
- **Diagram ID**: 98302
- **Elements**: 15
- **Connectors**: 2

```mermaid
graph TD
    n_05_170_Show_DD_statement_detail["05.170 Show DD statement detail"]
    n_05_150_Browse_DD_statements["05.150 Browse DD statements"]
    Reset["Reset"]
    Search["Search"]
    Button_panel["Button panel"]
    Direct_debit_statements["Direct debit statements"]
    Contract_number["Contract number"]
    Status["Status"]
    Due_date_to["Due date to"]
    Due_date_from["Due date from"]
    Currency["Currency"]
    Maximal_amount["Maximal amount"]
    Minimal_amount["Minimal amount"]
    Search_criteria["Search criteria"]
    Browse_DD_statements["Browse DD statements "]
    Browse_DD_statements -->|unnamed| n_05_150_Browse_DD_statements
    Direct_debit_statements -->|unnamed| n_05_170_Show_DD_statement_detail
```
