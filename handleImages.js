export default function useAssets(asset) {
    const assets = import.meta.glob("~/assets/images/*", { eager: true });
  
    const getAssetUrl = () => {
     if (assets[asset]) {
       return assets[asset].default
     }
    }
  
    return getAssetUrl()
  }
