/**
 * GitHub Language to Nerd Font Icon Converter
 *
 * This script maps common programming languages (as detected by GitHub)
 * to their corresponding Nerd Font icons/glyphs.
 */

interface LanguageIcon {
  icon: string;
  color: string;
}

// Language to Nerd Font icon mapping
// Common programming languages
const languageToNerdFontIcon: { [key: string]: LanguageIcon } = {
  JavaScript: { icon: "󰌞", color: "#f1e05a" }, // 󰌞  (e0c9e) nf-md-language_javascript
  TypeScript: { icon: "󰛦", color: "#3178c6" }, // 󰛦  (e6ce6) nf-md-language_typescript
  Python: { icon: "󰌠", color: "#3572A5" }, // 󰌠  (e0ca0) nf-md-language_python
  Java: { icon: "󰬷", color: "#b07219" }, // 󰬷  (e0b37) nf-md-language_java
  C: { icon: "󰙱", color: "#555555" }, // 󰙱  (e0631) nf-md-language_c
  "C++": { icon: "󰙲", color: "#f34b7d" }, // 󰙲  (e0632) nf-md-language_cpp
  "C#": { icon: "󰌛", color: "#178600" }, // 󰌛  (e0c9b) nf-md-language_csharp
  Go: { icon: "󰟓", color: "#00ADD8" }, // 󰟓  (e0fd3) nf-md-language_go
  Rust: { icon: "󱘗", color: "#dea584" }, // 󱘗  (e0617) nf-md-language_rust
  PHP: { icon: "󰌟", color: "#4F5D95" }, // 󰌟  (e0c9f) nf-md-language_php
  Ruby: { icon: "󰴭", color: "#701516" }, // 󰴭  (e0dad) nf-md-language_ruby
  Swift: { icon: "󰛥", color: "#F05138" }, // 󰛥  (e0ce5) nf-md-language_swift
  Kotlin: { icon: "󱈙", color: "#A97BFF" }, // 󱈙  (e0389) nf-md-language_kotlin
  Dart: { icon: "󰴀", color: "#00B4AB" }, // 󰴀  (e0d00) nf-md-language_dart
  HTML: { icon: "󰌝", color: "#e34c26" }, // 󰌝  (e0c9d) nf-md-language_html5
  CSS: { icon: "󰌜", color: "#563d7c" }, // 󰌜  (e0c9c) nf-md-language_css3
  Sass: { icon: "󰛣", color: "#a53b70" }, // 󰛣  (e0ce3) nf-md-language_sass
  Less: { icon: "󰝆", color: "#1d365d" }, // 󰝆  (e0746) nf-md-language_less
  Shell: { icon: "󱆃", color: "#89e051" }, // 󱆃  (e0183) nf-md-console
  Bash: { icon: "󰞷", color: "#4eaa25" }, // 󰞷  (e07b7) nf-md-bash
  PowerShell: { icon: "󰨊", color: "#012456" }, // 󰨊  (e0a0a) nf-md-powershell
  R: { icon: "󰟔", color: "#198CE7" }, // 󰟔  (e0fd4) nf-md-language_r
  Lua: { icon: "󰢱", color: "#000080" }, // 󰢱  (e08b1) nf-md-language_lua
  Perl: { icon: "󰨤", color: "#0298c3" }, // 󰨤  (e0a24) nf-md-language_perl
  Elixir: { icon: "󰡪", color: "#6e4a7e" }, // 󰡪  (e086a) nf-md-language_elixir
  Haskell: { icon: "󰲒", color: "#5e5086" }, // 󰲒  (e0c92) nf-md-language_haskell
  Clojure: { icon: "󰌛", color: "#db5855" }, // 󰌛  (e0c9b) nf-md-lambda
  Scala: { icon: "󰘓", color: "#c22d40" }, // 󰘓  (e0613) nf-md-language_scala
  "Objective-C": { icon: "󰙱", color: "#438eff" }, // 󰙱  (e0631) nf-md-language_c
  Vue: { icon: "󰡄", color: "#41b883" }, // 󰡄  (e0844) nf-md-vuejs
  Angular: { icon: "󰚲", color: "#dd0031" }, // 󰚲  (e0682) nf-md-angular
  React: { icon: "󰜈", color: "#61dafb" }, // 󰜈  (e0708) nf-md-react
  Svelte: { icon: "󰓓", color: "#ff3e00" }, // 󰓓  (e04d3) nf-md-svelte
  Markdown: { icon: "󰍔", color: "#083fa1" }, // 󰍔  (e0cd4) nf-md-language_markdown
  JSON: { icon: "󰘦", color: "#292929" }, // 󰘦  (e0626) nf-md-code_json
  YAML: { icon: "󰘏", color: "#cb171e" }, // 󰘏  (e060f) nf-md-file_code
  XML: { icon: "󰗀", color: "#0060ac" }, // 󰗀  (e05c0) nf-md-file_xml
  Docker: { icon: "󰡨", color: "#384d54" }, // 󰡨  (e0868) nf-md-docker
  SQL: { icon: "󰆼", color: "#e38c00" }, // 󰆼  (e01bc) nf-md-database
  GraphQL: { icon: "󰡷", color: "#e10098" }, // 󰡷  (e0877) nf-md-graphql
  Assembly: { icon: "󰙲", color: "#6E4C13" }, // 󰙲  (e0632) nf-md-memory
  "Jupyter Notebook": { icon: "󰠮", color: "#DA5B0B" }, // 󰠮  (e082e) nf-md-notebook
  Terraform: { icon: "󱁢", color: "#7B42BC" }, // 󱁢  (e0462) nf-md-terraform
  Vim: { icon: "󰕷", color: "#199f4b" }, // 󰕷  (e0557) nf-md-vim
  "Emacs Lisp": { icon: "󰀘", color: "#c065db" }, // 󰀘  (e0018) nf-md-emacs
  Julia: { icon: "󱥒", color: "#a270ba" }, // 󱥒  (e0952) nf-md-language_julia
  "F#": { icon: "󰈦", color: "#b845fc" }, // 󰈦  (e0226) nf-md-language_fsharp
  Erlang: { icon: "󰡑", color: "#B83998" }, // 󰡑  (e0851) nf-md-language_erlang
  Groovy: { icon: "󰊤", color: "#4298b8" }, // 󰊤  (e02a4) nf-md-language_groovy
  Fortran: { icon: "󱈚", color: "#4d41b1" }, // 󱈚  (e038a) nf-md-language_fortran
  COBOL: { icon: "󰛐", color: "#004466" }, // 󰛐  (e0cd0) nf-md-language_cobol
  Ada: { icon: "󰛓", color: "#02f88c" }, // 󰛓  (e0cd3) nf-md-language_ada
  D: { icon: "󰅩", color: "#ba595e" }, // 󰅩  (e0169) nf-md-language_d
  CoffeeScript: { icon: "󰇘", color: "#244776" }, // 󰇘  (e01d8) nf-md-coffee
  TeX: { icon: "󰙩", color: "#3D6117" }, // 󰙩  (e0629) nf-md-file_pdf_box
  MATLAB: { icon: "󰓵", color: "#bb92ac" }, // 󰓵  (e04f5) nf-md-matrix
};

export function getLanguageIcon(language: string): LanguageIcon {
  if (language in languageToNerdFontIcon) {
    return languageToNerdFontIcon[language];
  }

  return { icon: "󰅴", color: "#8f8f8f" }; // Generic code icon (nf-md-code_tags)
}
