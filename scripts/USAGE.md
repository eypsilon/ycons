# Emoji Parser Usage

The `parse-emojis.js` script processes Unicode emoji data into a structured JSON format for Ycons.

## 🚀 Quick Usage

```bash
cd scripts/
node parse-emojis.js
```

## 📁 Input & Output

**Input file:** `emoji-test.extended.txt` (645kb)
- Extended Unicode emoji data including WebApp symbols
- Country flags and custom symbols
- Official Unicode emoji test format

**Output file:** `emojis.extended.json` (263kb) 
- Clean JSON object with 1,736 processed symbols
- Structured with groups, subgroups, and metadata
- UTF-16 Unicode identifiers for CSS content

## 🔧 How It Works

1. **Parses** `emoji-test.extended.txt` line by line
2. **Extracts** emoji data (ID, name, group, subgroup, symbol)
3. **Filters** invalid or problematic entries
4. **Organizes** by groups and subgroups
5. **Outputs** structured JSON for the Ycons tool

## 🎯 Integration

The generated `emojis.extended.json` is used by:
- `example/index.html` - Loaded as JavaScript module
- Export/import functionality 
- CSS generation system

This enables **complete offline functionality** - Ycons runs independently on `file://` protocol without requiring a server.

## 📊 Output Structure

```json
{
  "groups": [
    {"name": "Smileys & Emotion", "count": 168},
    {"name": "People & Body", "count": 425}
  ],
  "symbols": [
    {
      "id": "1F600",
      "symbol": "😀", 
      "name": "grinning face",
      "group": "Smileys & Emotion",
      "subgroup": "face-smiling"
    }
  ]
}
```