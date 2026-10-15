#!/usr/bin/env bash
mkdir -p public/dentro-material
> public/dentro-material/urls.txt

urls=(
  "01 https://postimg.cc/cr0LsvXQ"
  "02 https://postimg.cc/yJM72xD4"
  "03 https://postimg.cc/bG7q4rZq"
  "04 https://postimg.cc/67kBFq84"
  "05 https://postimg.cc/xJL9QQm8"
  "06 https://postimg.cc/R6wvmmtJ"
  "07 https://postimg.cc/YhMCpv8J"
  "08 https://postimg.cc/TKP2DBzH"
  "09 https://postimg.cc/xcn10XtL"
  "10 https://postimg.cc/NK0GHWh0"
  "11 https://postimg.cc/YvS2WJc2"
  "12 https://postimg.cc/75LP2pvr"
  "13 https://postimg.cc/S2cm449z"
  "14 https://postimg.cc/hX3Dbpg1"
  "15 https://postimg.cc/Z9BTfpK6"
  "16 https://postimg.cc/Pp1dHHDY"
  "17 https://postimg.cc/0M79vvSf"
  "18 https://postimg.cc/RJ94VY11"
  "19 https://postimg.cc/Tpf3RKCg"
  "20 https://postimg.cc/wty6WLTh"
  "21 https://postimg.cc/7CGxB0Y3"
  "22 https://postimg.cc/Xp4YVrQF"
  "23 https://postimg.cc/H8HdsN04"
  "24 https://postimg.cc/06M8tD2Z"
  "25 https://postimg.cc/GTrdhfPz"
  "26 https://postimg.cc/WDBsxzhB"
  "27 https://postimg.cc/jnKtd16Z"
  "28 https://postimg.cc/5HhfDyXJ"
  "29 https://postimg.cc/xNYnTZGw"
)

fetch_one() {
  local id="$1"
  local page="$2"
  local img
  img=$(curl -sL "$page" | sed -n 's/.*property="og:image" content="\([^"]*\)".*/\1/p' | head -n1)
  if [ -n "$img" ]; then
    curl -sL "$img" -o "public/dentro-material/item-${id}.png"
    echo "${id}|${img}" >> public/dentro-material/urls.txt
    echo "Saved ${id} from ${img}"
  else
    echo "Failed ${id}"
  fi
}

for item in "${urls[@]}"; do
  id=$(echo "$item" | awk '{print $1}')
  url=$(echo "$item" | awk '{print $2}')
  fetch_one "$id" "$url" &
done

wait
echo "All 29 downloads completed!"
ls -1 public/dentro-material/item-*.png | wc -l
