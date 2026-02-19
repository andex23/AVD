#!/usr/bin/env python3
import html
from pathlib import Path

PALETTE = {
    "bg": "#F6F7F9",
    "surface": "#FFFFFF",
    "border": "#D9DEE8",
    "text": "#1C1F26",
    "muted": "#5A6473",
    "orange": "#F25A2B",
    "orange_soft": "#FFEAE1",
    "navy": "#162A4F",
    "navy_soft": "#E8EDF7",
    "green": "#16A34A",
}
FONT = "Inter, Arial, sans-serif"


def esc(text: str) -> str:
    return html.escape(text, quote=True)


def doc(width: int, height: int, label: str, body: str) -> str:
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" '
        f'role="img" aria-label="{esc(label)}">'
        f"<rect width=\"{width}\" height=\"{height}\" fill=\"{PALETTE['bg']}\"/>"
        f"{body}</svg>"
    )


def browser_frame(x: int, y: int, w: int, h: int, title: str = "") -> str:
    inner = [
        f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="14" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
        f'<rect x="{x+1}" y="{y+1}" width="{w-2}" height="56" rx="13" fill="#F9FAFC" stroke="{PALETTE["border"]}"/>',
        f'<circle cx="{x+28}" cy="{y+28}" r="7" fill="{PALETTE["orange"]}"/>',
        f'<circle cx="{x+50}" cy="{y+28}" r="7" fill="{PALETTE["navy"]}"/>',
        f'<circle cx="{x+72}" cy="{y+28}" r="7" fill="#D1D7E3"/>',
        f'<text x="{x+w-20}" y="{y+33}" text-anchor="end" fill="{PALETTE["muted"]}" '
        f'font-family="{FONT}" font-size="10" letter-spacing="2">{esc(title)}</text>',
    ]
    return "".join(inner)


def mobile_frame(x: int, y: int, w: int, h: int) -> str:
    return "".join(
        [
            f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="38" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
            f'<rect x="{x+((w-90)//2)}" y="{y+12}" width="90" height="8" rx="4" fill="#D7DDE8"/>',
            f'<rect x="{x+20}" y="{y+32}" width="{w-40}" height="{h-56}" rx="20" fill="#FBFCFE" stroke="{PALETTE["border"]}"/>',
        ]
    )


def hero_desktop() -> str:
    x, y, w, h = 60, 54, 1160, 690
    body = [browser_frame(x, y, w, h, "AVD SYSTEM VIEW")]

    # Left content column
    body.extend(
        [
            f'<rect x="120" y="148" width="128" height="12" rx="6" fill="{PALETTE["orange_soft"]}"/>',
            f'<rect x="120" y="190" width="420" height="52" rx="8" fill="{PALETTE["text"]}"/>',
            f'<rect x="120" y="254" width="390" height="18" rx="6" fill="{PALETTE["muted"]}"/>',
            f'<rect x="120" y="282" width="350" height="18" rx="6" fill="{PALETTE["muted"]}"/>',
            f'<rect x="120" y="328" width="170" height="44" rx="22" fill="{PALETTE["orange"]}"/>',
            f'<rect x="304" y="328" width="152" height="44" rx="22" fill="{PALETTE["surface"]}" stroke="{PALETTE["text"]}"/>',
            f'<text x="205" y="355" text-anchor="middle" fill="{PALETTE["text"]}" font-family="{FONT}" font-size="13" font-weight="700" letter-spacing="1.5">START PROJECT</text>',
            f'<text x="380" y="355" text-anchor="middle" fill="{PALETTE["text"]}" font-family="{FONT}" font-size="13" font-weight="700" letter-spacing="1.5">VIEW WORK</text>',
        ]
    )

    # Right dashboard panel
    body.extend(
        [
            f'<rect x="620" y="146" width="530" height="270" rx="12" fill="#FBFCFE" stroke="{PALETTE["border"]}"/>',
            f'<text x="648" y="178" fill="{PALETTE["orange"]}" font-family="{FONT}" font-size="11" font-weight="700" letter-spacing="2">CRM STATUS</text>',
            f'<rect x="648" y="194" width="470" height="1" fill="{PALETTE["border"]}"/>',
        ]
    )
    col_width = 108
    col_gap = 12
    col_x = 648
    for i, (name, fill, cards) in enumerate(
        [
            ("Lead", "#FCECE7", ["Medline Labs", "Oakview Group", "Cobalt Fin"]),
            ("Qualified", "#FDF5E5", ["Haven Health", "Northstar", "Summit Edu"]),
            ("Proposal", "#EAF0FB", ["Riverton", "Atlas", "Aurelia"]),
            ("Won", "#E8F8EE", ["Pioneer Care", "Brisk Retail", "Apex Trust"]),
        ]
    ):
        cx = col_x + i * (col_width + col_gap)
        body.append(f'<rect x="{cx}" y="210" width="{col_width}" height="188" rx="10" fill="{fill}" stroke="{PALETTE["border"]}"/>')
        body.append(
            f'<text x="{cx+10}" y="228" fill="{PALETTE["muted"]}" font-family="{FONT}" font-size="9" font-weight="700" letter-spacing="1.2">{name.upper()}</text>'
        )
        yy = 246
        for card in cards:
            body.append(f'<rect x="{cx+8}" y="{yy}" width="{col_width-16}" height="38" rx="7" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>')
            body.append(f'<text x="{cx+14}" y="{yy+22}" fill="{PALETTE["text"]}" font-family="{FONT}" font-size="8.6">{card}</text>')
            yy += 46

    # Lower metrics row
    body.extend(
        [
            f'<rect x="120" y="430" width="1030" height="254" rx="12" fill="#FBFCFE" stroke="{PALETTE["border"]}"/>',
            f'<text x="144" y="462" fill="{PALETTE["orange"]}" font-family="{FONT}" font-size="11" font-weight="700" letter-spacing="1.8">BUILD METRICS</text>',
        ]
    )
    stat_data = [
        ("PageSpeed", "96"),
        ("Core Web Vitals", "Pass"),
        ("Lead Route Accuracy", "99%"),
    ]
    for i, (k, v) in enumerate(stat_data):
        sx = 144 + i * 332
        body.extend(
            [
                f'<rect x="{sx}" y="486" width="312" height="168" rx="10" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
                f'<text x="{sx+20}" y="516" fill="{PALETTE["muted"]}" font-family="{FONT}" font-size="10" font-weight="700" letter-spacing="1.2">{k.upper()}</text>',
                f'<text x="{sx+20}" y="556" fill="{PALETTE["text"]}" font-family="{FONT}" font-size="34" font-weight="700">{v}</text>',
                f'<rect x="{sx+20}" y="576" width="{180 - i*20}" height="10" rx="5" fill="{PALETTE["navy"]}"/>',
                f'<rect x="{sx+20}" y="594" width="{240 - i*18}" height="8" rx="4" fill="#6C7688"/>',
            ]
        )

    return doc(1280, 800, "AVD desktop website and systems preview", "".join(body))


def hero_mobile() -> str:
    body = [mobile_frame(40, 20, 340, 820)]
    body.extend(
        [
            f'<rect x="88" y="88" width="244" height="42" rx="8" fill="#F9FAFC" stroke="{PALETTE["border"]}"/>',
            f'<rect x="102" y="104" width="92" height="10" rx="5" fill="{PALETTE["orange"]}"/>',
            f'<rect x="88" y="162" width="220" height="24" rx="6" fill="{PALETTE["text"]}"/>',
            f'<rect x="88" y="198" width="196" height="12" rx="6" fill="{PALETTE["muted"]}"/>',
            f'<rect x="88" y="220" width="170" height="12" rx="6" fill="{PALETTE["muted"]}"/>',
            f'<rect x="88" y="254" width="132" height="38" rx="19" fill="{PALETTE["orange"]}"/>',
            f'<rect x="228" y="254" width="108" height="38" rx="19" fill="{PALETTE["surface"]}" stroke="{PALETTE["text"]}"/>',
            f'<text x="154" y="278" text-anchor="middle" fill="{PALETTE["text"]}" font-family="{FONT}" font-size="9.5" font-weight="700" letter-spacing="1.4">START</text>',
            f'<text x="282" y="278" text-anchor="middle" fill="{PALETTE["text"]}" font-family="{FONT}" font-size="9.5" font-weight="700" letter-spacing="1.4">WORK</text>',
        ]
    )

    # Mobile mini dashboard
    body.extend(
        [
            f'<rect x="88" y="318" width="244" height="214" rx="12" fill="#FBFCFE" stroke="{PALETTE["border"]}"/>',
            f'<text x="104" y="344" fill="{PALETTE["orange"]}" font-family="{FONT}" font-size="9" font-weight="700" letter-spacing="1.4">CRM SNAPSHOT</text>',
            f'<rect x="104" y="360" width="212" height="1" fill="{PALETTE["border"]}"/>',
        ]
    )
    for i in range(3):
        y = 376 + i * 50
        body.extend(
            [
                f'<rect x="104" y="{y}" width="212" height="40" rx="8" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
                f'<rect x="118" y="{y+12}" width="86" height="8" rx="4" fill="{PALETTE["navy"]}"/>',
                f'<rect x="118" y="{y+24}" width="132" height="6" rx="3" fill="#6C7688"/>',
                f'<circle cx="{290}" cy="{y+20}" r="6" fill="{PALETTE["green"] if i == 0 else PALETTE["orange"]}"/>',
            ]
        )

    body.extend(
        [
            f'<rect x="88" y="556" width="116" height="66" rx="10" fill="{PALETTE["orange_soft"]}" stroke="{PALETTE["border"]}"/>',
            f'<rect x="216" y="556" width="116" height="66" rx="10" fill="{PALETTE["navy_soft"]}" stroke="{PALETTE["border"]}"/>',
            f'<text x="104" y="578" fill="{PALETTE["orange"]}" font-family="{FONT}" font-size="8" font-weight="700" letter-spacing="1.2">LEADS</text>',
            f'<text x="104" y="604" fill="{PALETTE["text"]}" font-family="{FONT}" font-size="22" font-weight="700">42</text>',
            f'<text x="232" y="578" fill="{PALETTE["navy"]}" font-family="{FONT}" font-size="8" font-weight="700" letter-spacing="1.2">CONVERSION</text>',
            f'<text x="232" y="604" fill="{PALETTE["text"]}" font-family="{FONT}" font-size="22" font-weight="700">18%</text>',
        ]
    )

    return doc(420, 860, "AVD mobile website and CRM preview", "".join(body))


def crm_overlay() -> str:
    body = [
        f'<rect x="10" y="10" width="400" height="220" rx="16" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
        f'<text x="30" y="44" fill="{PALETTE["orange"]}" font-family="{FONT}" font-size="11" font-weight="700" letter-spacing="2">CRM PIPELINE</text>',
        f'<text x="390" y="44" text-anchor="end" fill="{PALETTE["muted"]}" font-family="{FONT}" font-size="10" letter-spacing="1.4">LIVE STATUS</text>',
        f'<rect x="30" y="56" width="360" height="1" fill="{PALETTE["border"]}"/>',
    ]

    cols = ["Lead", "Qualified", "Proposal", "Won"]
    for i, label in enumerate(cols):
        x = 30 + i * 90
        body.extend(
            [
                f'<rect x="{x}" y="72" width="78" height="130" rx="10" fill="#FBFCFE" stroke="{PALETTE["border"]}"/>',
                f'<text x="{x+10}" y="90" fill="{PALETTE["muted"]}" font-family="{FONT}" font-size="8" font-weight="700" letter-spacing="1.1">{label.upper()}</text>',
            ]
        )
        for j in range(3):
            y = 100 + j * 30
            body.extend(
                [
                    f'<rect x="{x+8}" y="{y}" width="62" height="22" rx="6" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
                    f'<rect x="{x+14}" y="{y+8}" width="36" height="6" rx="3" fill="{PALETTE["navy"] if j == 0 else "#6A7383"}"/>',
                ]
            )

    # Tiny chart + status
    body.extend(
        [
            f'<rect x="30" y="208" width="240" height="8" rx="4" fill="{PALETTE["orange_soft"]}"/>',
            f'<rect x="30" y="208" width="172" height="8" rx="4" fill="{PALETTE["orange"]}"/>',
            f'<circle cx="328" cy="212" r="8" fill="{PALETTE["green"]}"/>',
            f'<text x="344" y="216" fill="{PALETTE["text"]}" font-family="{FONT}" font-size="10" font-weight="700">Automation Healthy</text>',
        ]
    )

    return doc(420, 240, "CRM pipeline overlay card", "".join(body))


def automation_badge() -> str:
    body = [
        f'<rect x="6" y="10" width="208" height="70" rx="35" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
        f'<circle cx="38" cy="45" r="16" fill="{PALETTE["orange_soft"]}"/>',
        f'<circle cx="38" cy="45" r="7" fill="{PALETTE["orange"]}"/>',
        f'<text x="66" y="41" fill="{PALETTE["muted"]}" font-family="{FONT}" font-size="9" font-weight="700" letter-spacing="1.3">AUTOMATION</text>',
        f'<text x="66" y="56" fill="{PALETTE["text"]}" font-family="{FONT}" font-size="13" font-weight="700">3 workflows active</text>',
        f'<circle cx="192" cy="45" r="6" fill="{PALETTE["green"]}"/>',
    ]
    return doc(220, 90, "Automation active badge", "".join(body))


def project_mock(title: str, subtitle: str, accent: str, alt_blocks: bool = False) -> str:
    body = [
        browser_frame(52, 50, 1096, 660, subtitle),
        f'<text x="96" y="98" fill="{accent}" font-family="{FONT}" font-size="11" font-weight="700" letter-spacing="2">{esc(title)}</text>',
        f'<rect x="92" y="146" width="1016" height="1" fill="{PALETTE["border"]}"/>',
        f'<rect x="96" y="176" width="460" height="34" rx="7" fill="{PALETTE["text"]}"/>',
        f'<rect x="96" y="224" width="426" height="14" rx="6" fill="{PALETTE["muted"]}"/>',
        f'<rect x="96" y="248" width="392" height="14" rx="6" fill="{PALETTE["muted"]}"/>',
        f'<rect x="96" y="284" width="130" height="36" rx="8" fill="{PALETTE["navy"]}"/>',
    ]

    if alt_blocks:
        body.extend(
            [
                f'<rect x="624" y="176" width="472" height="192" rx="10" fill="#F8FAFD" stroke="{PALETTE["border"]}"/>',
                f'<rect x="644" y="198" width="200" height="12" rx="6" fill="{PALETTE["navy"]}"/>',
                f'<rect x="644" y="220" width="310" height="8" rx="4" fill="#6A7383"/>',
                f'<rect x="644" y="238" width="274" height="8" rx="4" fill="#6A7383"/>',
                f'<rect x="644" y="268" width="120" height="30" rx="7" fill="{PALETTE["orange"]}"/>',
                f'<rect x="624" y="388" width="472" height="206" rx="10" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
            ]
        )
    else:
        body.extend(
            [
                f'<rect x="624" y="176" width="472" height="418" rx="10" fill="#F8FAFD" stroke="{PALETTE["border"]}"/>',
                f'<rect x="644" y="198" width="170" height="10" rx="5" fill="{PALETTE["orange"]}"/>',
                f'<rect x="644" y="222" width="420" height="166" rx="8" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
                f'<rect x="644" y="402" width="420" height="170" rx="8" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
            ]
        )

    # Lower section rows
    row_y = 348
    for i in range(5):
        body.append(f'<rect x="96" y="{row_y + i*24}" width="{360 - i*18}" height="12" rx="6" fill="{PALETTE["muted"] if i else PALETTE["text"]}"/>')

    return doc(1200, 760, f"{title} project mock screenshot", "".join(body))


def workflow_diagram() -> str:
    body = [
        f'<rect x="36" y="34" width="1208" height="452" rx="16" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
        f'<text x="72" y="78" fill="{PALETTE["orange"]}" font-family="{FONT}" font-size="13" font-weight="700" letter-spacing="2">SYSTEM FLOW</text>',
        f'<text x="1210" y="78" text-anchor="end" fill="{PALETTE["muted"]}" font-family="{FONT}" font-size="11" letter-spacing="1.5">LEAD FORM -> CRM -> EMAIL -> INTERNAL ALERT</text>',
    ]

    nodes = [
        ("Lead Form", "Website capture and qualification", PALETTE["orange"]),
        ("CRM", "Pipeline stage + owner assignment", PALETTE["navy"]),
        ("Email", "Client confirmation and nurture", "#374151"),
        ("Internal Notification", "Ops + sales handoff alert", PALETTE["green"]),
    ]

    for i, (title, sub, tone) in enumerate(nodes):
        x = 86 + i * 286
        body.extend(
            [
                f'<rect x="{x}" y="150" width="240" height="210" rx="14" fill="#FBFCFE" stroke="{PALETTE["border"]}"/>',
                f'<circle cx="{x+38}" cy="186" r="14" fill="{tone}"/>',
                f'<text x="{x+64}" y="192" fill="{PALETTE["text"]}" font-family="{FONT}" font-size="20" font-weight="700">{title}</text>',
                f'<text x="{x+24}" y="230" fill="{PALETTE["muted"]}" font-family="{FONT}" font-size="12">{sub}</text>',
                f'<rect x="{x+24}" y="258" width="120" height="10" rx="5" fill="{tone}"/>',
                f'<rect x="{x+24}" y="278" width="168" height="8" rx="4" fill="#6A7383"/>',
                f'<rect x="{x+24}" y="294" width="152" height="8" rx="4" fill="#6A7383"/>',
            ]
        )

        if i < 3:
            ax = x + 248
            body.extend(
                [
                    f'<line x1="{ax}" y1="256" x2="{ax+34}" y2="256" stroke="{PALETTE["border"]}" stroke-width="4"/>',
                    f'<polygon points="{ax+34},248 {ax+50},256 {ax+34},264" fill="{PALETTE["orange"]}"/>',
                ]
            )

    return doc(1280, 520, "Lead form to CRM to email to internal notification workflow", "".join(body))


def crm_pipeline_preview() -> str:
    body = [
        f'<rect x="32" y="32" width="1136" height="556" rx="16" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
        f'<rect x="32" y="32" width="1136" height="66" rx="16" fill="#F9FAFC" stroke="{PALETTE["border"]}"/>',
        f'<text x="62" y="72" fill="{PALETTE["orange"]}" font-family="{FONT}" font-size="12" font-weight="700" letter-spacing="2">CRM ARCHITECTURE</text>',
        f'<text x="1140" y="72" text-anchor="end" fill="{PALETTE["muted"]}" font-family="{FONT}" font-size="10" letter-spacing="1.4">PIPELINE + OWNER + STATUS</text>',
    ]

    columns = [
        ("New Leads", "#FDF3EF"),
        ("Qualified", "#FFF6E9"),
        ("Proposal", "#EEF2FB"),
        ("Won", "#EAF8EF"),
    ]

    for i, (label, shade) in enumerate(columns):
        x = 58 + i * 274
        body.extend(
            [
                f'<rect x="{x}" y="122" width="252" height="434" rx="12" fill="{shade}" stroke="{PALETTE["border"]}"/>',
                f'<text x="{x+16}" y="148" fill="{PALETTE["text"]}" font-family="{FONT}" font-size="12" font-weight="700" letter-spacing="1">{label.upper()}</text>',
                f'<rect x="{x+172}" y="136" width="58" height="20" rx="10" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
                f'<text x="{x+201}" y="150" text-anchor="middle" fill="{PALETTE["muted"]}" font-family="{FONT}" font-size="10" font-weight="700">{6 - i}</text>',
            ]
        )
        for j in range(4):
            y = 172 + j * 92
            body.extend(
                [
                    f'<rect x="{x+14}" y="{y}" width="224" height="78" rx="9" fill="{PALETTE["surface"]}" stroke="{PALETTE["border"]}"/>',
                    f'<rect x="{x+26}" y="{y+14}" width="120" height="9" rx="4.5" fill="{PALETTE["navy"] if j == 0 else "#6A7383"}"/>',
                    f'<rect x="{x+26}" y="{y+30}" width="170" height="7" rx="3.5" fill="#6A7383"/>',
                    f'<rect x="{x+26}" y="{y+43}" width="148" height="7" rx="3.5" fill="#6A7383"/>',
                    f'<circle cx="{x+204}" cy="{y+22}" r="6" fill="{PALETTE["green"] if i == 3 else PALETTE["orange"]}"/>',
                ]
            )

    return doc(1200, 620, "CRM pipeline preview with lead stages", "".join(body))


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content)
    print(f"wrote {path}")


def main() -> None:
    base = Path("public/images")
    write(base / "hero/hero-desktop-mockup.svg", hero_desktop())
    write(base / "hero/hero-mobile-mockup.svg", hero_mobile())
    write(base / "hero/crm-status-overlay.svg", crm_overlay())
    write(base / "hero/automation-badge.svg", automation_badge())

    write(
        base / "projects/project-atlas-website.svg",
        project_mock("HEALTHCARE", "8 WEEKS", PALETTE["orange"], alt_blocks=False),
    )
    write(
        base / "projects/project-northstar-portal.svg",
        project_mock("INVESTMENT", "6 WEEKS", PALETTE["orange"], alt_blocks=True),
    )
    write(
        base / "projects/project-riverstone-commerce.svg",
        project_mock("RETAIL & E-COMMERCE", "7 WEEKS", PALETTE["orange"], alt_blocks=False),
    )
    write(
        base / "projects/project-summit-dashboard.svg",
        project_mock("EDUCATION", "9 WEEKS", PALETTE["orange"], alt_blocks=True),
    )

    write(base / "systems/workflow-diagram.svg", workflow_diagram())
    write(base / "systems/crm-pipeline-preview.svg", crm_pipeline_preview())


if __name__ == "__main__":
    main()
