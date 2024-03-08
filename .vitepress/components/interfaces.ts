export namespace Assets {
  export interface colorSwatch {
    colorName: string
    clr: string
    cssVar: string
    pantone: string
    textColor?: 'light' | 'dark'
  }

  export interface fileDownload {
    title: string
    subtitle: string
    fileType: string
    url: string
  }
}
