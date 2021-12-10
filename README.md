# byrokracie

# Vstup
Na prvním řádku je přirozené číslo 1 ≤ T ≤ 100 značící počet zadání, která budou
následovat.
Na prvním řádku každého zadání jsou tři přirozená čísla 0 ≤ P ≤ 103, 0 ≤ Z ≤ 106 a 0 ≤ n < P oddělená mezerou, kde 
P značí počet povolení a n značí číslo povolení ke stavbě. Následuje Z řádků, na i-tém řádku zadání jsou dvě přirozená
čísla 0 ≤ ai ≤ P a 0 ≤ bi ≤ P. Tato dvojice reprezentuje závislost povolení číslo ai
na povolení číslo bi – jinými slovy, na vyřízení povolení ai je nejprve potřeba vyřídit povolení bi.
# Výstup
Na výstupu je jeden řádek pro každé zadání.
Pokud lze všechny závislosti mezi povoleními uspokojit a vyřídit povolení číslo
n, pak výstupní řádek začíná slovy pujde to. Po nich následuje m mezerou oddělených přirozených čísel p1, p2, . . . , pm (pm = n) značící čísla povolení v pořadí, v
jakém je možné je vyřídit, aby při vyřizování konkrétního povolení byly už všechny
jeho závislosti vyřízené. Řešení minimalizuje m, tj. posloupnost povolení neobsahuje
žádná, která k vyřízení povolení n nejsou opravdu potřeba.
Nelze-li závislosti uspokojit, je výstupem pouze slovo ajajaj.
