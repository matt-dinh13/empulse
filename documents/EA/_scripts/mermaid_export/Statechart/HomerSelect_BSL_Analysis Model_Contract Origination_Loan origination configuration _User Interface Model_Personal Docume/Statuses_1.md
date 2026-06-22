# Statuses

```mermaid
graph TD
    Final["Final"]
    Cancelled["Cancelled"]
    Active["Active"]
    New["New"]
    Initial["Initial"]
    Initial -->|unnamed| New
    New -->|unnamed| Active
    Active -->|unnamed| Cancelled
    Cancelled -->|unnamed| Final
```
