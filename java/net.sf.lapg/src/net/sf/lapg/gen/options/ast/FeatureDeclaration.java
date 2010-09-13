package net.sf.lapg.gen.options.ast;

import net.sf.lapg.gen.options.OptdefTree.TextSource;

public class FeatureDeclaration extends AstOptNode {

	private String name;
	private Type type;
	private Modifiers modifiersopt;
	private Defaultval defaultvalopt;

	public FeatureDeclaration(String name, Type type, Modifiers modifiersopt, Defaultval defaultvalopt, TextSource input, int start, int end) {
		super(input, start, end);
		this.name = name;
		this.type = type;
		this.modifiersopt = modifiersopt;
		this.defaultvalopt = defaultvalopt;
	}

	public String getName() {
		return name;
	}
	public Type getType() {
		return type;
	}
	public Modifiers getModifiersopt() {
		return modifiersopt;
	}
	public Defaultval getDefaultvalopt() {
		return defaultvalopt;
	}
}