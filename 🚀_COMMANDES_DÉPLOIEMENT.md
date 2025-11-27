# 🚀 COMMANDES DE DÉPLOIEMENT

## ⚡ Déploiement Rapide (3 Commandes)

```bash
# 1. Ajouter les fichiers
git add .npmrc netlify.toml

# 2. Commit
git commit -m "fix: Configure Netlify pour React 19"

# 3. Push
git push origin main
```

**C'est tout ! Netlify va automatiquement déployer votre site.**

---

## 🔍 Vérifier le Déploiement

1. Allez sur : https://app.netlify.com/
2. Sélectionnez votre site
3. Attendez 2-3 minutes
4. Cliquez sur le lien de votre site

---

## 🧪 Tester les Aperçus (Après Déploiement)

### Facebook
https://developers.facebook.com/tools/debug/

### Twitter
https://cards-dev.twitter.com/validator

### LinkedIn
https://www.linkedin.com/post-inspector/

---

## ✅ Fichiers Créés pour Netlify

- ✅ `.npmrc` - Force `--legacy-peer-deps`
- ✅ `netlify.toml` - Configuration de build

---

## 🎯 Résultat Attendu

Après le push, Netlify va :
1. ✅ Installer les dépendances avec `--legacy-peer-deps`
2. ✅ Builder le projet
3. ✅ Déployer le site
4. ✅ Votre site sera en ligne ! 🎉

---

**Prêt ? Copiez-collez les 3 commandes ci-dessus ! 🚀**
