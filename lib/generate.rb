#!/usr/bin/env ruby

require 'json'
require 'csv'
require 'net/http'
require 'date'
Encoding.default_external = Encoding::UTF_8

class String
  def is_i?
    !!(self =~ /\A[-+]?[0-9]+\z/)
  end
  def camelize(uppercase_first_letter = true)
    string = self
    if uppercase_first_letter
      string = string.sub(/^[a-z\d]*/) { $&.capitalize }
    else
      string = string.sub(/^(?:(?=\b|[A-Z_])|\w)/) { $&.downcase }
    end
    string.gsub(/(?:_|(\/))([a-z\d]*)/) { "#{$1}#{$2.capitalize}" }.gsub('/', '::')
  end
end

require_relative 'generate_model'
require_relative 'generate_config_file'
require_relative 'config_weapon_mods'
require_relative 'config_commonplace_items'
require_relative 'gsheets'

imports = ARGV

GSHEETS.each do |p|
  if imports.length > 0
    if imports.include?(p[:type])
      generate_config_file(p)
    end
  else
    generate_config_file(p)
  end
end
